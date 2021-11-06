import React from "react";

const Register = ({onRouteChange}) => {
    return (
        <article class="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
            <main class="pa4 black-80">
                <form class="measure ">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                        <legend class="f2 fw6 ph0 mh0">Register</legend>
                        <div class="mt3">
                            <label class="db mb1 fw6 lh-copy f6" for="name">Name</label>
                            <input class="pa2 b--black input-reset bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
                        </div>
                        <div class="mt3">
                            <label class="db mb1 fw6 lh-copy f6" for="email-address">Email</label>
                            <input class="pa2 b--black input-reset bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div class="mv3">
                            <label class="db mb1 fw6 lh-copy f6" for="password">Password</label>
                            <input class="b pa2 b--black input-reset bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                    </fieldset>
                    <div class="">
                        <input class="b ph3 pv2 input-reset b--black bg-transparent grow pointer f6 dib" 
                        type="submit" value="Register"
                        onClick={()=>onRouteChange("home")}/>
                    </div>
                </form>
            </main>
        </article>
    )
}

export default Register;