import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

// icons
import ArrowDown from '@assets/svg/arrowDown';
import ArrowUp from '@assets/svg/arrowUp';
import StarIcon from '@assets/svg/star';

// Mock
import AccordionMock from '@mock/AccordionMock';

// Utils
import { truncateString } from '../../../modules/utils';

// Styles
import Styles from './styles';

class AccordionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSections: [],
    };
  }

  renderEvaluation = numberStar => {
    const itemStar = [];
    if (!numberStar) return null;
    for (let qtd = 1; qtd <= 5; qtd += 1) {
      if (qtd <= numberStar) {
        itemStar.push(<StarIcon key={qtd} />);
      } else {
        itemStar.push(<StarIcon key={qtd} fill="none" stroke="#A1A6AF" />);
      }
    }
    return itemStar;
  };

  renderHeader = (section, _, isActive) => (
    <View style={Styles.header}>
      <Text style={Styles.headerText}>{section.title}</Text>
      <View style={Styles.contentIcons}>
        <View style={Styles.evaluationStar}>
          {this.renderEvaluation(section.stars)}
        </View>
        {isActive ? <ArrowUp /> : <ArrowDown />}
      </View>
    </View>
  );

  renderContent = section => (
    <View style={Styles.content}>
      <Text style={Styles.contentText}>
        {truncateString(section.content, 190)}
        &nbsp;
        {section.type === 'text' && (
          <Text
            suppressHighlighting
            style={Styles.contentModal}
            onPress={() => this.props.actionMore(section)}
          >
            Ler&nbsp;mais
          </Text>
        )}
      </Text>
    </View>
  );

  updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    const { activeSections } = this.state;
    return (
      <Accordion
        sections={AccordionMock}
        activeSections={activeSections}
        renderHeader={this.renderHeader}
        renderContent={this.renderContent}
        onChange={this.updateSections}
      />
    );
  }
}

AccordionView.propTypes = {
  actionMore: PropTypes.func.isRequired,
};
export default AccordionView;
