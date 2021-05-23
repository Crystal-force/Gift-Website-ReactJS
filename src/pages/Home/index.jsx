import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Calander, DownScrollButton, Events, RemoteExchange, SendReady, TriAccounts, WishList } from '../../assets/icons'
import { CardFunction, CardWorking, Footer, HeaderMenu } from '../../components'
import {createStep} from '../../action'
import './style.scss'
/**
 * @augments {Component<Props, State>}
 */
class Home extends Component {
  static propTypes = {

  }

  createExchange = () => {
    this.props.createStep(1)
    this.props.history.push('/create-exchange')
  }

  render() {
    console.log('Home')
    return (
      <div className="home-page">
        <div className="header">
          <HeaderMenu />
          <div className="header-main">
            <div className="title">Con Gift2Gift</div>
            <div className="sub-title">Intercambia fácil</div>
            <Button onClick={this.createExchange}>Crear Intercambio </Button>
            <div className="down-scroll"><DownScrollButton /></div>
          </div>
        </div>
        <div className="list-part g2g">
          <div className="title" id="Gift2Gift">Gift2Gift</div>
          <div className="g2g-main">
            <div className="description"><span>Gift 2 Gift</span> es una aplicación para organizar intercambios entre familia, amigos o compañeros de trabajo.</div>
            <div className="image"></div>
          </div>
        </div>
        <div className="list-part how-working">
          <div className="main">
            <div className="title" id="¿Cómo funciona?">¿Cómo funciona?</div>
            <div className="cards">
              <CardWorking
                icon={<TriAccounts />}
                title='Ingresa los participantes'
                descrption="Agrega todos los participantes que desees en el intercambio. No hay un límite."
              />
              <CardWorking
                icon={<Events />}
                title='Da detalles del intercambio'
                descrption="Agrega la fecha, monto de los regalos y categorías. ¡Qué no se te pase nada!"
              />
              <CardWorking
                icon={<SendReady />}
                title='Envia y Listo'
                descrption="Da click en enviar y listo. Realizaremos el sorteo y notificaremos por correo un correo a todos los participantes."
              />
            </div>
            <Button>Crear un intercambio </Button>
          </div>
          <div className="triangle-top-left" />
        </div>
        <div className="list-part other-function">
          <div className="title" id="Otras funciones">Otras funciones</div>
          <div className="main">
            <CardFunction
              icon={<WishList />}
              title="Lista de Deseos"
              descrption="Agrega tu lista de deseos con recomendaciones personalizadas"
            />
            <CardFunction
              icon={<Calander />}
              title="Calendario de Eventos"
              descrption="Agrega a tu calendario para que no olvides el evento"
            />
            <CardFunction
              icon={<RemoteExchange />}
              title="Intercambios a distancia"
              descrption="Crea una video conferencia para tus intercambios a distancia"
            />
          </div>
        </div>
        <div className="list-part comments">
          <div className="triangle-bottom-left" />
          <div className="main">
            <div className="title">Lo que dicen nuestros usuarios</div>
            <div className="content">
              <div className="image" />
              <div className="content">
                <div className="title">"</div>
                <div className="content">En la App he encontrado una manera fácil de organizar intercambios con familia y amigos, facilitando todo referente a ello. </div>
                <div className="user-name">Sara</div>
              </div>
            </div>
          </div>
          <div className="triangle-top-left" />
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {
  createStep
})(Home)
