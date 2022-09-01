import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { Route, Routes } from 'react-router-dom'
/* import DialogsConteiner from './components/Dialogs/DialogsConteiner' */
import UsersConteiner from './components/Users/UsersConteiner'
/* import ProfileConteiner from './components/Profile/ProfileConteiner' */
import HeaderCoteiner from './components/Header/HeaderConteiner'
import Login from './components/Login/Login'
import { initializeApp } from './Redux/App-reducer'
import Preloader from './components/common/preloader/preloader'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './Redux/redux-store'
import { Suspense } from 'react'
const DialogsConteiner = React.lazy(() =>
	import('./components/Dialogs/DialogsConteiner')
)
const ProfileConteiner = React.lazy(() =>
	import('./components/Profile/ProfileConteiner')
)
class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp()
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<div className='app-wrapper'>
				<HeaderCoteiner />
				<Navbar></Navbar>
				<div className='app-wrapper-content'>
					<Suspense fallback={<Preloader />}>
						<Routes>
							<Route path='/profile/:userId' element={<ProfileConteiner />} />
							<Route path='/profile' element={<ProfileConteiner />} />
							<Route path='/dialogs' element={<DialogsConteiner />} />
							<Route path='/News' element={<News />} />
							<Route path='/Music' element={<Music />} />
							<Route path='/Settings' element={<Settings />} />
							<Route path='/Users' element={<UsersConteiner />} />
							<Route path='/login' element={<Login />} />
						</Routes>
					</Suspense>
				</div>
			</div>
		)
	}
}
const mapStateToProps = State => ({ initialized: State.app.initialized })
let AppConteiner = connect(mapStateToProps, { initializeApp })(App)
let MeinApp = props => {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Provider store={Store}>
				<AppConteiner />
			</Provider>
		</BrowserRouter>
	)
}
export default MeinApp
