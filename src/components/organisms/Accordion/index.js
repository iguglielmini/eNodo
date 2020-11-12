import * as React from 'react';
import { List } from 'react-native-paper';

// Styles
import Styles from './styles';

const Accordion = () => {
  return (
    <List.Section>
      <List.Accordion
        title="Sobre o produto"
        style={Styles.accordionBorder}
        titleStyle={Styles.title}
      >
        <List.Item description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </List.Accordion>
      <List.Accordion
        title="Como usar"
        style={Styles.accordionBorder}
        titleStyle={Styles.title}
      >
        <List.Item description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </List.Accordion>
      <List.Accordion
        title="Avaliações"
        style={Styles.accordionBorder}
        titleStyle={Styles.title}
      >
        <List.Item description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </List.Accordion>
    </List.Section>
  );
};

export default Accordion;
