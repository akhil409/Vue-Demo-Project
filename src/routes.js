
import FormValidationsVue from "./components/FormValidations.vue";
import VVFormValidateVue from "./components/VVFormValidate.vue";
import PostDetailsVue from "./components/PostDetails.vue";
import EditDetailsVue from "./components/EditDetails.vue";
import DeleteDialogVue from "./components/DeleteDialog.vue";
import LoginFormVue from "./components/LoginForm.vue";
import MainComponentVue from "./components/MainComponent.vue";
import NavbarComponentVue from "./components/NavbarComponent.vue";
import ForgotPassword from "./components/ForgotPassword.vue";

// import VForm from "./components/VForm.vue";

export default[
    {path:'/', component:LoginFormVue},
    {path:'/add', component:FormValidationsVue },
    {path:'/post-details', component:PostDetailsVue },
    {path:'/edit-details/:id', component:EditDetailsVue },
    {path:'/delete-details/:id', component:DeleteDialogVue },
    {path:'/register-form', component:VVFormValidateVue },
    {path:'/main-component', component:MainComponentVue },
    {path:'/navbar-component', component:NavbarComponentVue },
    {path:'/forgot-password', component:ForgotPassword }
    // {path:'/form', component:VForm }
]