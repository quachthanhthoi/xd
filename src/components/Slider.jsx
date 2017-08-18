import React from 'react';
import PropTypes from 'prop-types';
import { Input, Icon, Label, Popup } from 'semantic-ui-react';
import './slider.css';

const ControlledSlider = ({ value, onChange, style }) => {
	const normalizedValue = Math.min(Math.max(0, value), 100);
	return (
		<div style={style}>
			<span>
				<Input
					className="sliderInput"
					value={normalizedValue}
					type="number"
					labelPosition="right"
					placeholder=""
					onChange={(e, { value }) => onChange(Number.parseInt(value))}>
					<Popup
						trigger={
							<Label
								basic
								icon={{
									name: 'low vision',
									style: { marginRight: 0, paddingRight: 0 }
								}}
								style={{ border: 'none' }}
							/>
						}
						content="Opacity"
					/>
					<input style={{ textAlign: 'right', marginRight: 1 }} />
					<Label
						basic
						content="%"
						style={{
							border: 'none',
							paddingLeft: 0,
							paddingTop: 13,
							marginLeft: 0,
							marginBottom: 0,
							paddingBottom: 0
						}}
					/>
				</Input>
			</span>
			<span>
				<input
					style={{
						margin: 'auto'
					}}
					type="range"
					onChange={({ target: { value } }) => onChange(Number.parseInt(value))}
					value={normalizedValue}
					max="100"
					min="0"
					step="1"
				/>
			</span>
		</div>
	);
};

const control = WrappedComponent =>
	class extends React.Component {
		static propTypes = {
			value: PropTypes.number.isRequired,
			onChange: PropTypes.func.isRequired
		};
		state = {
			value: this.props.value
		};
		handleOnChange = value => {
			this.setState({ value });
			return this.props.onChange(value);
		};
		render() {
			const { onChange, style } = this.props;
			const { value } = this.state;
			return (
				<WrappedComponent
					value={value}
					onChange={this.handleOnChange}
					style={style}
				/>
			);
		}
	};

const Slider = control(ControlledSlider);

export { Slider, ControlledSlider };
