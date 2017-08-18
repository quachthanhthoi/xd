import '../../my-semantic-theme/semantic.less';
import React, { Component } from 'react';
import {
  Input,
  Image,
  Button,
  Segment,
  Label,
  Icon,
  Popup
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './InputComponent.css';

const ControlledInputComponent = ({
  lock,
  width,
  height,
  x,
  y,
  degree,
  onClickButton,
  onSizeChange,
  onAxisChange,
  onRotateChange
}) => {
  return (
    <table>
      <td>
        <div className="wrapper">
          <div className="input">
            <Popup
              trigger={
                <Label
                  style={{
                    borderStyle: 'none',
                    borderWidth: '0',
                    backgroundColor: 'white',
                    marginRight: '-1px'
                  }}
                  content="W"
                />
              }
              content="Width"
              position="top left"
            />
            <Input
              className="width"
              value={width}
              onChange={onSizeChange}
              style={{ width: '40px' }}
            />
          </div>
          <div className="lock_button">
            <Button
              style={{
                borderStyle: 'none',
                borderWidth: '0',
                paddingLeft: '3px',
                backgroundColor: 'white',
                marginLeft: '5px'
              }}
              content={
                <div style={{ marginTop: '-7px', marginLeft: '-5px' }}>
                  <span>
                    <hr
                      style={{
                        width: '5px',
                        height: '1px',
                        borderWidth: '0',
                        backgroundColor: 'grey',
                        marginBottom: '-8px',
                        marginLeft: '5px'
                      }}
                    />
                    <hr
                      style={{
                        width: '1px',
                        height: '10px',
                        borderWidth: '0',
                        backgroundColor: 'grey',
                        marginBottom: '2px'
                      }}
                    />
                  </span>
                  {lock === false
                    ? <Icon
                        name="unlock"
                        style={{ paddingLeft: '5px' }}
                        color="grey"
                      />
                    : <Icon
                        name="lock"
                        style={{ paddingLeft: '2px' }}
                        color="grey"
                        disabled
                      />}
                  <span>
                    <hr
                      style={{
                        width: '1px',
                        height: '10px',
                        borderWidth: '0',
                        backgroundColor: 'grey',
                        marginTop: '2px'
                      }}
                    />
                    <hr
                      style={{
                        width: '5px',
                        height: '1px',
                        borderWidth: '0',
                        backgroundColor: 'grey',
                        marginTop: '-8px',
                        marginLeft: '5px'
                      }}
                    />
                  </span>
                </div>
              }
              onClick={onClickButton}
            />
          </div>

          <div className="input">
            <Popup
              trigger={
                <Label
                  style={{
                    borderStyle: 'none',
                    borderWidth: '0',
                    backgroundColor: 'white'
                  }}
                  content="H"
                />
              }
              content="Height"
              position="bottom left"
            />
            <Input
              className="height"
              value={height}
              onChange={onSizeChange}
              style={{ width: '40px' }}
            />
          </div>
        </div>
      </td>
      <td>
        <div className="wrapper" style={{ marginLeft: '-25px' }}>
          <div className="input">
            <Popup
              trigger={
                <Label
                  style={{
                    borderStyle: 'none',
                    borderWidth: '0',
                    backgroundColor: 'white'
                  }}
                  content="X"
                />
              }
              content="X position"
              position="top center"
            />
            <Input
              className="vertical"
              value={x}
              onChange={onAxisChange}
              style={{ width: '40px' }}
            />
          </div>
          <div className="input">
            <Popup
              trigger={
                <Label
                  style={{
                    borderStyle: 'none',
                    borderWidth: '0',
                    backgroundColor: 'white'
                  }}
                  content="Y"
                />
              }
              content="Y position"
              position="bottom center"
            />
            <Input
              className="horizontal"
              value={y}
              onChange={onAxisChange}
              style={{ width: '40px' }}
            />
          </div>
        </div>
      </td>
      <td>
        <div className="wrapper" style={{ marginLeft: '-50px' }}>
          <div className="input">
            <Popup
              trigger={
                <Label
                  style={{
                    borderStyle: 'none',
                    borderWidth: '0',
                    backgroundColor: 'white'
                  }}
                  icon="repeat"
                />
              }
              content="Rotation"
              position="top right"
            />
            <Input
              className="vertical"
              value={degree}
              onChange={onRotateChange}
              style={{ width: '40px', marginLeft: '-10px' }}
            />
          </div>
        </div>
      </td>
    </table>
  );
};

const control = WrappedComponent =>
  class extends Component {
    static propTypes = {
      onChange: PropTypes.func.isRequired
    };

    constructor(props) {
      super(props);
      this.state = {
        lock: false,
        width: 100,
        height: 50,
        x: 49.2,
        y: 150.8,
        degree: 90 + '\u2070'
      };
    }

    handleClickButton = e => {
      this.setState({ lock: !this.state.lock });
      this.props.onChange(this.state);
    };

    handleSizeChange = (e, data) => {
      if (this.state.lock) {
        if (this.state.width > 0 && this.state.height > 0 && data.value > 0) {
          if (data.className === 'width') {
            let height = data.value * this.state.height / this.state.width;
            this.setState({
              width: data.value,
              height: height
            });
          } else {
            let width = data.value * this.state.width / this.state.height;
            this.setState({
              width: width,
              height: data.value
            });
          }
        }
      } else {
        if (data.className === 'width') {
          this.setState({ width: data.value });
        } else {
          this.setState({
            height: data.value
          });
        }
      }
      this.props.onChange(this.state);
    };

    handleAxisChange = (e, data) => {
      if (data.className === 'vertical') {
        this.setState({ x: data.value });
      } else {
        this.setState({ y: data.value });
      }
      this.props.onChange(this.state);
    };

    handleRotateChange = (e, data) => {
      if (data.value.includes('\u2070')) {
        this.setState({ degree: data.value });
      } else {
        this.setState({ degree: data.value + '\u2070' });
      }
      this.props.onChange(this.state);
    };

    render() {
      return (
        <WrappedComponent
          lock={this.state.lock}
          width={this.state.width}
          height={this.state.height}
          x={this.state.x}
          y={this.state.y}
          degree={this.state.degree}
          onClickButton={this.handleClickButton}
          onSizeChange={this.handleSizeChange}
          onRotateChange={this.handleRotateChange}
        />
      );
    }
  };

const InputComponent = control(ControlledInputComponent);

export { InputComponent };
