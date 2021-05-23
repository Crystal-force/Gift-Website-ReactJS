import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button, IconButton } from '@material-ui/core'
import './style.scss'
import { Check, Delete, SearchIcon, WishList } from '../../assets/icons'
import { getAmazonProducts, setHeader, saveWishlists, getMyWishList } from '../../action'
import backgroundImage004 from '../../assets/images/background004.jpg'
import { AlertAction } from '../../components/Alert'
class WishListPage extends Component {

  state = {
    wishlists: [],
    editWishlist: [{ type: '', item: null }, { type: '', item: null }, { type: '', item: null }],
    editIndex: -1,
    selectedSuggestion: -1,
    suggestion: []
  }

  async componentDidMount() {
    this.props.setHeader(
      <div>Wishlist</div>,
      backgroundImage004
    )
    let { uid, eid } = this.props.match.params
    let wishlists = await this.props.getMyWishList(uid, eid);
    if (Array.isArray(wishlists)) {
      let editWishlist = wishlists.map(element => ({ type: '', item: element.url ? element : null }))
      this.setState({ editWishlist })
    }

  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // if (wishlistSaved && Array.isArray(wishlist)) {
    //   let editWishlist = wishlist.map(element => ({ type: '', item: element }))
    //   this.setState({ editWishlist })
    // }

  }

  saveWishlists = async () => {

    let { editWishlist, selectedSuggestion, suggestion, editIndex } = this.state
    if (editIndex !== -1 && selectedSuggestion !== -1) {
      this.selectProduct(editIndex)
    }
    this.setState({ editIndex: -1, selectedSuggestion: -1 })
    if (selectedSuggestion !== -1)
      editWishlist.splice(editIndex, 1, { ...editWishlist[editIndex], item: suggestion[selectedSuggestion] })
    let wishlist = editWishlist.map(element => element.item)
    let confirmed = false;
    for (let item of wishlist) {
      if (item) {
        confirmed = true;
      }
    }
    if (!confirmed) AlertAction.openAlert('Gift2Gift', 'Por favor ingresa al menos una opción de regalo', null);
    let { uid, eid } = this.props.match.params
    await this.props.saveWishlists(uid, eid, wishlist)
  }

  changeType = index => evt => {
    let { editWishlist } = this.state
    editWishlist.splice(index, 1, { ...editWishlist[index], type: evt.target.value })
    this.setState({ editWishlist })
  }
  searchAmazon = index => async evt => {
    let { editIndex, editWishlist, selectedSuggestion } = this.state
    let { uid, eid } = this.props.match.params
    let suggestion = await this.props.getAmazonProducts(uid, eid, editWishlist[index].type)
    if (editIndex !== -1 && selectedSuggestion !== -1) {
      this.selectProduct(editIndex)
    }
    this.setState({ suggestion, editIndex: index, selectedSuggestion: -1 })
  }

  selectProduct = index => {
    let { editWishlist, selectedSuggestion, suggestion } = this.state
    editWishlist.splice(index, 1, { ...editWishlist[index], item: suggestion[selectedSuggestion] })
    this.setState({ editWishlist })
  }

  deleteWishlist = index => {
    let { editWishlist } = this.state
    editWishlist.splice(index, 1, { type: '', item: null })
    this.refs[`inputfield${index}`].focus()
    this.setState({ editWishlist, editIndex: -1, selectedSuggestion: -1, suggestion: [] })
  }

  render() {
    let {
      match: { params: { uid, eid } }
    } = this.props;
    let { editIndex, editWishlist, suggestion, selectedSuggestion } = this.state
    return (
      <div className="wish-list">
        <div className="before-action">
          <Button variant="text" color="inherit" onClick={() => this.props.history.push(`/confirm-exchange/${uid}/${eid}`)}>&lt;Regresar</Button>
        </div>
        <div className="header">
          <div className="icon"><WishList /></div>
          <div className="title">Agregar Wishlist</div>
        </div>
        <div className="wishlists">

          {
            editWishlist.map((item, index) => (
              <div className="wishlist-item" key={index}>
                <div className="title">
                  <div className="product">
                    <input
                      value={item.type}
                      ref={`inputfield${index}`}
                      onChange={this.changeType(index)} placeholder="Escribe una opción de regalo"
                    />
                  </div>
                  <div className="action">
                    {item.item ?
                      <IconButton size="small" onClick={() => this.deleteWishlist(index)}><Delete /></IconButton>
                      : <Button onClick={this.searchAmazon(index)}>Sugerir<SearchIcon /></Button>
                    }
                  </div>
                </div>
                {item.item &&
                  <div className="categories">
                    <div className="category" >
                      <div className="photo" style={{ backgroundImage: `url(${item.item.thumbnail})` }} />
                      <div className="details">
                        <div className="category-name">{item.item.title}</div>
                        <div className="description">{item.item.price}</div>
                      </div>
                    </div>
                  </div>
                }
                {editIndex === index &&
                  <div className="categories">
                    {Array.isArray(suggestion) && suggestion.map((element, index) => (
                      <div className="category" key={index}>
                        <div className="optional" onClick={() => this.setState({ selectedSuggestion: index })}>
                          {
                            selectedSuggestion === index && <Check />
                          }
                        </div>
                        <div className="photo" style={{ backgroundImage: `url(${element.thumbnail})` }} />
                        <div className="details" onClick={() => this.setState({ selectedSuggestion: index })}>
                          <div className="category-name">{element.title}</div>
                          <div className="description">{element.price}</div>
                        </div>
                        <Button variant="outlined" onClick={() => window.open(element.url)}>Ver</Button>
                      </div>
                    ))}
                  </div>
                }
              </div>
            ))
          }
        </div>
        <div className="action">
          <Button onClick={() => this.saveWishlists()}>Guardar</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ exchange }) => ({
  exchange
})


export default withRouter(connect(mapStateToProps, {
  getAmazonProducts, setHeader, saveWishlists, getMyWishList
})(WishListPage))
