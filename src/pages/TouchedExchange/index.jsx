import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Avatar } from '../../components'
import { Button } from '@material-ui/core'
import avatars from '../../utils'
import './style.scss'
import { AccountQuestion, Amazon, MagicWand, Notification } from '../../assets/icons'
import NoWishlist from '../../assets/svg/NoWishList.svg'
import backgroundImage003 from '../../assets/images/4896.jpg'
import { setHeader, getToWishList, sendRequestWishlist } from '../../action'
import ThemeColors from '../../config/ThemeColors'

class TouchedExchange extends Component {

  state = {
    wishlists: [],
    userInfo: {},
    participantId: '',
  }

  async componentDidMount() {
    this.props.setHeader(
      <div>
        <div className="d-flex justify-center">
          <AccountQuestion color={ThemeColors.secondary.main} />
        </div>
        <div>
          {`¿Quién me toco en el intercabio?`}
        </div>
      </div>,
      backgroundImage003
    )
    let { uid, eid } = this.props.match.params
    let result = await this.props.getToWishList(uid, eid);
    this.setState({ ...result })
  }

  sendRequestWishlist = async () => {
    let { eid } = this.props.match.params
    let { userInfo, participantId } = this.state
    await this.props.sendRequestWishlist(userInfo.email, participantId, eid)
  }

  renderWishList = (wishlist, key) => (
    <div className="wish-list-item" key={key}>
      <div className="photo" style={{ backgroundImage: `url(${wishlist.thumbnail})` }} onClick={()=>window.open(wishlist.url)}/>
      <div className="info" onClick={()=>window.open(wishlist.url)}>
        <div className="name">{wishlist.title}</div>
        <div className="description">{wishlist.price}</div>
      </div>
      <div className="action">
        <Button className="amazon-button" onClick={()=>window.open(wishlist.url)}><Amazon size={35} />Comprar en Amazon</Button>
      </div>
    </div>
  )

  render() {
    let { userInfo, wishlists } = this.state
    let { uid, eid } = this.props.match.params
    return (
      <div className="touched-exchange">
        <div className="before-action m-15">
          <Button variant="text" color="inherit" onClick={() => this.props.history.push(`/confirm-exchange/${uid}/${eid}`)}>&lt;Regresar</Button>
        </div>
        <div className="user-info">
          <div className="avatar-container">
            <Avatar avatar={avatars[0]} />
          </div>
          <div className="user-name">
            <div>Tu amigo secreto es</div>
            <div className="name">{userInfo.name}</div>
          </div>
        </div>
        {(Array.isArray(wishlists) && wishlists.length) ?
          <React.Fragment>
            <div className="title">
              <MagicWand size={45} />{`Lista de deseos de ${userInfo.name}`}
            </div>
            <div className="wish-lists">
              {wishlists.map((wishlist, index) => wishlist.url && this.renderWishList(wishlist, index))}
            </div>
          </React.Fragment>
          : <div className="no-wish-list">
            <div className="main">
              <img src={NoWishlist} alt="" />
              <div className="title">Tu amigo secreto aún no se ha llenado la lista de deseos</div>
              <Button onClick={this.sendRequestWishlist}><Notification size={28} />&nbsp;Recordar llenar la lista de deseos</Button>
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ exchange }) => ({
  exchange
})
export default withRouter(connect(mapStateToProps, {
  setHeader, getToWishList, sendRequestWishlist
})(TouchedExchange))
