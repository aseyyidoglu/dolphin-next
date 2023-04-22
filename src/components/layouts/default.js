import Meta from '@/components/parts/meta'
import Header from '@/components/parts/header'
import Footer from '@/components/parts/footer'

export default function Layout(props, {children}) {
  return (
    <>
      <Meta
        title={props.title || "Homepage"}
        description={props.description || "Description"}
        tags={props.tags || []}
      />
      <Header />
        {children}
      <Footer />
    </>
  );
}