import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

// icons
import ArrowDown from '@assets/svg/arrowDown';
import ArrowUp from '@assets/svg/arrowUp';
import StarIcon from '@assets/svg/star';

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

  renderEvaluation = (numberStar) => {
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

  renderHeader = ({ title, average, content }, _, isActive) => {
    const { description } = content;

    if (!description) return <></>;

    return (
      <View style={Styles.header}>
        <Text style={Styles.headerText}>{title}</Text>
        <View style={Styles.contentIcons}>
          {average > 0 && (
            <View style={Styles.evaluationStar}>
              {this.renderEvaluation(average)}
            </View>
          )}
          {isActive ? <ArrowUp /> : <ArrowDown />}
        </View>
      </View>
    );
  };

  renderContent = ({ content, type }) => {
    const { description } = content;

    if (!description) return null;

    return (
      <View style={Styles.content}>
        <Text style={Styles.contentText}>
          {truncateString(description, 190)}
          &nbsp;
          {type === 'text' && (
            <Text
              suppressHighlighting
              style={Styles.contentModal}
              onPress={() => this.props.actionMore(description)}
            >
              Ler&nbsp;mais
            </Text>
          )}
        </Text>
      </View>
    );
  };

  updateSections = (activeSections) => {
    this.setState({ activeSections });
  };

  render() {
    const { data } = this.props;
    const { activeSections } = this.state;

    if (!data.length) return null;

    return (
      <Accordion
        sections={data}
        onChange={this.updateSections}
        activeSections={activeSections}
        renderHeader={this.renderHeader}
        renderContent={this.renderContent}
      />
    );
  }
}

AccordionView.propTypes = {
  actionMore: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default AccordionView;
