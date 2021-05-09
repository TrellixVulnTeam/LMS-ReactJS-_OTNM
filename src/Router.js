import react from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navigation from "./components/layout/Navigation"
import Home from "./components/child/Home";
import About from "./components/child/About";
import Contact from "./components/child/Contact";
import Error from "./components/child/Error";
import Books from "./components/books/Books";
import Login from "./components/auth/Login";
import Book from "./components/auth/after-auth-admin/books/Book";
import Registration from "./components/auth/Registration";
import TopNavigation from "./components/layout/TopNavigation";
import LogoSection from "./components/layout/LogoSection";
import Footer from "./components/layout/Footer";
import AddBook from "./components/auth/after-auth-admin/books/AddBook";
import BookView from "./components/auth/after-auth-admin/books/BookView";
import UpdateBook from "./components/auth/after-auth-admin/books/UpdateBook";
import Admin from "./components/auth/after-auth-admin/admins/Admin";
import AddAdmin from "./components/auth/after-auth-admin/admins/AddAdmin";
import UpdateAdmin from "./components/auth/after-auth-admin/admins/UpdateAdmin";
import AdminView from "./components/auth/after-auth-admin/admins/AdminView";
import Member from "./components/auth/after-auth-admin/member/Member";
import AddMember from "./components/auth/after-auth-admin/member/AddMember";
import UpdateMember from "./components/auth/after-auth-admin/member/UpdateMember";
import MemberView from "./components/auth/after-auth-admin/member/MemberView";

const Router = () =>{
    return(
        <BrowserRouter>
            <TopNavigation />
            <LogoSection />
            <Navigation/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/About" component={About} />
                <Route  path="/contact" component={Contact} />
                <Route  path="/books" component={Books} />
                <Route  path="/auth/login" component={Login} />
                <Route  path="/auth/registration" component={Registration} />
                <Route  path="/auth/after-auth-admin/admin-dashboard/books" component={Book} />
                <Route  path="/auth/after-auth-admin/admin-dashboard/addbook" component={AddBook} />
                <Route  path="/auth/after-auth-admin/admin-dashboard/bookview/:id" component={BookView} />
                <Route  path="/auth/after-auth-admin/admin-dashboard/updatebook/:id" component={UpdateBook} />

                <Route  path="/auth/after-auth-admin/admin-dashboard/admin" component={Admin} />
                <Route  path="/auth/after-auth-admin/admin-dashboard/addadmin" component={AddAdmin} />
                <Route  path="/auth/after-auth-admin/admin-dashboard/updateadmin/:id" component={UpdateAdmin} />
                <Route  path="/auth/after-auth-admin/admin-dashboard/adminview/:id" component={AdminView} />

                <Route  path="/auth/after-auth-admin/admin-dashboard/member" component={Member} />
                <Route  path="/auth/after-auth-admin/admin-dashboard/addmember" component={AddMember} />
                <Route  path="/auth/after-auth-admin/admin-dashboard/updatemember/:id" component={UpdateMember} />
                <Route  path="/auth/after-auth-admin/admin-dashboard/memberview/:id" component={MemberView} />
                <Route  component={Error} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}
export default Router;