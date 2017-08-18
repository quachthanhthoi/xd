import '../../my-semantic-theme/semantic.less';
import React, { Component } from 'react';
import { Input, Popup, Header, Icon, Dropdown, Button } from 'semantic-ui-react';
import lineSpacing from '../../icon/line-spacing.png';



const ControlledAlignment = ({
	font,
	fontSize,
	fontWeight,
	characterSpacing,
	lineSpacing,
	onChange,
	fontOptions,
	fontWeightOptions
}) => {
	return (
		<div>
			<Header color="grey" size="tiny">
				TEXT
			</Header>
      <Popup
    trigger={<Dropdown
				text={font}
				fluid
				search
				selection
				options={fontOptions}
				onChange={(e, { value }) => onChange({ font: value })}
			/>}
      content='Font'/>
			<div style={{ display: 'flex' }}>
        <Popup
      trigger={<Input
					value={fontSize}
					onChange={(e, { value }) => onChange({ fontSize: value })}
				/>} content='Font Size'/>
        <Popup
      trigger={<Dropdown
					text={fontWeight}
					style={{ flexShrink: '1' }}
					fluid
					search
					selection
          options={fontWeightOptions}
					onChange={(e, { value }) =>
						onChange({ fontWeight: value })}
				/>} content='Font Weight'/>
			</div>
			<div>
				<Button.Group>
          <Popup
        trigger={<Button icon onClick={(e,data)=>onChange({alignText: 'left'})}>
						<Icon fitted name="align left" />
					</Button>} content='Align Left'/>
          <Popup
        trigger={<Button icon onClick={(e,data)=>onChange({alignText: 'center'})}>
						<Icon name="align center" />
					</Button>} content='Align Center'/>
          <Popup
        trigger={<Button icon onClick={(e,data)=>onChange({alignText: 'right'})}>
						<Icon name="align right" />
					</Button>} content='Align Right'/>
				</Button.Group>
			</div>

			<div>
        <Popup
      trigger={<Icon name="delete" />} content='Character Spacing'/>
				<Input
					value={characterSpacing}
					onChange={(e, { value }) =>
						onChange({ characterSpacing: value })}
				/>
        <Popup
      trigger={<img src={lineSpacing} style={{ margin: '0 10px -2px 0' }} />} content='Line Spacing'/>
				<Input
					value={lineSpacing}
					onChange={(e, { value }) =>
						onChange({ lineSpacing: value })}
				/>
			</div>
		</div>
	);
};

const control = WrappedComponent =>
	class extends Component {
		constructor() {
			super();
			this.state = {
				font: 'Helvetica Neue',
				fontSize: '12',
				fontWeight: 'Ultra Light',
				characterSpacing: '0',
				lineSpacing: '17',
        align: 'none'
			};
      this.onChange = this.onChange.bind(this);
		}
		onChange = (d) => {
      console.log(d);
			this.setState(d);
      console.log("async",this.state);
		};
		render() {
			const {
				font,
				fontSize,
				fontWeight,
				characterSpacing,
				lineSpacing
			} = this.state;
      const {
        fontOptions,fontWeightOptions
      } = this.props
			return (
				<WrappedComponent
					font={font}
					fontSize={fontSize}
					fontWeight={fontWeight}
					characterSpacing={characterSpacing}
					lineSpacing={lineSpacing}
          fontOptions={fontOptions}
          fontWeightOptions={fontWeightOptions}
					onChange={this.onChange}
				/>
			);
		}
	};
const Alignment = control(ControlledAlignment);
export { Alignment, ControlledAlignment };
