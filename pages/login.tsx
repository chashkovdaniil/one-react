import Section from "../components/common/Section";
import MainLayout from "../components/layouts/MainLayout";

export default function Login() {
  return (
    <MainLayout title="Login">
      <Section
        title="Login"
        childrenCenter
        id="form"
        forwardLink={{ href: "/signup#form", title: "Sign up" }}
      >
        <form>
          <div className="form-input">
            <input type="email" id="email" placeholder="" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-input">
            <input type="password" id="password" placeholder="" />
            <label htmlFor="password">Password</label>
          </div>
          <div className="form-buttons">
            <button className="form__button">
              <i className="fas fa-question"></i>
            </button>
            <button className="form__button">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </form>

      </Section>
    </MainLayout>
  )
}