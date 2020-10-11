import React from "react";

import tshirtImage from "../../assets/tshirt.png";

import ProductAction from "../ProductAction";
import SellerInfo from "../SellerInfo";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};
const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compora garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos o seu dinheiro
        </p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vitae
      sapiente doloremque optio dolor, rerum assumenda. Aut quam debitis natus
      officiis, ullam aperiam. Ad illum esse aliquid voluptates voluptatibus,
      doloremque totam placeat dignissimos sint corrupti debitis quisquam magnam
      maxime similique voluptas dolorem quas eveniet quibusdam, recusandae, sed
      ratione aliquam quaerat?
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores,
      ratione qui aliquid minus harum architecto dolorem veniam voluptatem porro
      quibusdam consequatur odit, quos saepe. Illum quae voluptatum minus rerum
      nam doloribus quaerat modi ducimus! Harum voluptates minus molestiae quam
      explicabo rem consequuntur voluptatibus. Optio eligendi molestiae ipsum
      nihil autem, obcaecati nemo ea adipisci sequi asperiores error, voluptatum
      blanditiis dolores corrupti neque quaerat perspiciatis quas, dolorum
      excepturi esse nulla! Ratione unde nam harum delectus, placeat illum
      inventore, culpa ea eius voluptates labore est. Dolor eligendi optio
      perspiciatis blanditiis deleniti deserunt omnis veritatis quod iusto enim
      cumque veniam, eaque nam laborum at quis alias laboriosam modi quas. Hic,
      et ducimus distinctio natus porro modi harum at suscipit, reprehenderit
      aliquam sint! Odit!
    </p>
  </Description>
);

export default Product;
