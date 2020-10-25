import * as React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const Styles = StyleSheet.create({
  accordionBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#A1A6AF',
  },
  title: {
    color: '#000000',
  },
});
const Accordion = () => {
  return (
    <List.Section>
      <List.Accordion
        title="Ajuda"
        style={Styles.accordionBorder}
        titleStyle={Styles.title}
      >
        <List.Item description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </List.Accordion>
      <List.Accordion
        title="Nossa Loja"
        style={Styles.accordionBorder}
        titleStyle={Styles.title}
      >
        <List.Item description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </List.Accordion>
      <List.Accordion
        title="Formas de Pagamentos"
        style={Styles.accordionBorder}
        titleStyle={Styles.title}
      >
        <List.Item description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </List.Accordion>
      <List.Accordion
        title="Mais Belshop"
        style={Styles.accordionBorder}
        titleStyle={Styles.title}
      >
        <List.Item description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </List.Accordion>
    </List.Section>
  );
};

export default Accordion;
