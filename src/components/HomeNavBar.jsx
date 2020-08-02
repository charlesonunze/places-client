import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import {
	Collapse,
	NavbarBrand,
	Navbar,
	NavItem,
	Nav,
	Container,
	Row,
	Col
} from 'reactstrap';

class HomeNavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapseOpen: false,
			collapseOut: ''
		};
	}

	toggleCollapse = () => {
		this.setState({ collapseOpen: !this.state.collapseOpen });
	};

	onCollapseExiting = () => {
		this.setState({ collapseOut: 'collapsing-out' });
	};

	onCollapseExited = () => {
		this.setState({ collapseOut: '' });
	};

	render() {
		const _links = [
			{ path: '/users', label: 'Users' },
			{ path: '/username/places', label: 'Places' },
			{ path: '/places/new', label: 'Add New Place' },
			{ path: '/places/:placeid', label: 'Update Place' },
			{ path: '/signup', label: 'Sign Up' },
			{ path: '/login', label: 'Log in' }
		];

		return (
			<div>
				<Navbar className='bg-danger' expand='lg'>
					<Container>
						<div className='navbar-translate'>
							<NavbarBrand to='/' id='navbar-brand' tag={Link}>
								<span>PLACES </span>
							</NavbarBrand>
							<button
								aria-expanded={this.state.collapseOpen}
								className='navbar-toggler'
								onClick={this.toggleCollapse}
							>
								<span className='navbar-toggler-bar bar1' />
								<span className='navbar-toggler-bar bar2' />
								<span className='navbar-toggler-bar bar3' />
							</button>
						</div>

						<Collapse
							className={'justify-content-end ' + this.state.collapseOut}
							navbar
							isOpen={this.state.collapseOpen}
							onExiting={this.onCollapseExiting}
							onExited={this.onCollapseExited}
						>
							<div className='navbar-collapse-header'>
								<Row>
									<Col className='collapse-brand' xs='6'>
										<a href='#pablo' onClick={(e) => e.preventDefault()}>
											PLACES
										</a>
									</Col>
									<Col className='collapse-close text-right' xs='6'>
										<button
											aria-expanded={this.state.collapseOpen}
											className='navbar-toggler'
											onClick={this.toggleCollapse}
										>
											<i className='tim-icons icon-simple-remove' />
										</button>
									</Col>
								</Row>
							</div>

							<Nav navbar>
								{_links.map(({ path, label }, index) => {
									return (
										<NavItem key={index}>
											<NavLink to={path}>{label}</NavLink>
										</NavItem>
									);
								})}
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}

export default HomeNavBar;
