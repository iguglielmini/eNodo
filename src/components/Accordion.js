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
    marginTop: 30,
    marginBottom: 30,
    fontSize: 14,
  },
});
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
