import MainLayout from '../components/layouts/MainLayout';
import Section from "../components/common/Section";

function Page404() {
  return (
    <MainLayout title="404">
      <Section childrenCenter>
        <h1 style={{ color: "black" }}>Error 404</h1>
      </Section>
    </MainLayout>
  );
}

export default Page404;