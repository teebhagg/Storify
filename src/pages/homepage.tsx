import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useMediaQuery } from "react-responsive";
import PromotionCard from "../components/home/promotion_card";
import FeaturedSection from "../components/home/featured_section";
import NewItemsSection from "../components/home/new_items_section";

export default function HomePage() {
  const mobileDisplay = useMediaQuery({ query: "(max-width: 600px)" });
  const tabletDisplay = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Container>
      {tabletDisplay ? (
        <Form className="d-flex position-relative mt-4">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 rounded-pill pe-5 me-3"
            aria-label="Search"></Form.Control>
          <i className="bi bi-search position-absolute me-4 top-50 end-0 translate-middle"></i>
        </Form>
      ) : null}
      <PromotionCard />
      <FeaturedSection />
      <NewItemsSection/>
    </Container>
  );
}
