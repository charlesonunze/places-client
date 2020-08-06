import UsersPage from "../users/pages/UsersPage";
import PlacesPage from "../places/pages/PlacesPage";
import HomePage from "../pages/HomePage";

export default [
  { path: '/home', label: 'Home', component: HomePage },
  { path: '/users', label: 'Users', component: UsersPage },
  { path: '/username/places', label: 'Places', component: PlacesPage },
  { path: '/places/new', label: 'Add New Place', component: null },
  { path: '/places/:placeid', label: 'Update Place', component: null },
  { path: '/signup', label: 'Sign Up', component: null },
  { path: '/login', label: 'Log in', component: null }
];