import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Input, Popup } from 'semantic-ui-react';

const InputwithPopUp = ({ content, name, onChange, value }) =>
	<Popup
		trigger={
			<Input
				className="borderOption"
				slyte={{ margin: '5px' }}
				placeholder="0"
				name={name}
				value={value}
				onChange={onChange}
			/>
		}
		content={content}
	/>;

const ControlledBorderOption = ({
	data: { topLeft, topRight, bottomLeft, bottomRight },
	onChange,
	onClick,
	isAll
}) =>
	<span>
		<span>
			<Popup
				trigger={
					<Button icon value="all" onClick={() => onClick(true)}>
						<Icon name="square" fitted />
					</Button>
				}
				content="Same radius for all corner"
			/>
			<Popup
				trigger={
					<Button icon value="modify" onClick={() => onClick(false)}>
						<Icon name="block layout" fitted />
					</Button>
				}
				content="Different radius for each corner"
			/>
		</span>
		{!isAll &&
			<span>
				<InputwithPopUp
					content="Top Left"
					name="topLeft"
					onChange={(e, { value }) =>
						onChange({
							topLeft: Number.parseInt(value),
							topRight,
							bottomLeft,
							bottomRight
						})}
					value={topLeft}
				/>
				<InputwithPopUp
					content="Top Right"
					name="topRight"
					onChange={(e, { value }) =>
						onChange({
							topLeft,
							topRight: Number.parseInt(value),
							bottomLeft,
							bottomRight
						})}
					value={topRight}
				/>
				<InputwithPopUp
					content="Bottom Left"
					name="bottomLeft"
					onChange={(e, { value }) =>
						onChange({
							topLeft,
							topRight,
							bottomLeft: Number.parseInt(value),
							bottomRight
						})}
					value={bottomLeft}
				/>
				<InputwithPopUp
					content="Bottom Right"
					name="bottomRight"
					onChange={(e, { value }) =>
						onChange({
							topLeft,
							topRight,
							bottomLeft,
							bottomRight: Number.parseInt(value)
						})}
					value={bottomRight}
				/>
			</span>}
		{isAll &&
			<span>
				<InputwithPopUp
					content="All"
					name="topLeft"
					onChange={(e, { value }) =>
						onChange({
							topLeft: Number.parseInt(value),
							topRight: Number.parseInt(value),
							bottomLeft: Number.parseInt(value),
							bottomRight: Number.parseInt(value)
						})}
					value={topLeft}
				/>
			</span>}
	</span>;

const control = WrappedComponent =>
	class extends React.Component {
		static propTypes = {
			data: PropTypes.shape({
				topLeft: PropTypes.number.isRequired,
				topRight: PropTypes.number.isRequired,
				bottomLeft: PropTypes.number.isRequired,
				bottomRight: PropTypes.number.isRequired
			}).isRequired,
			onChange: PropTypes.func.isRequired
		};
		state = {
			topLeft: this.props.data.topLeft,
			topRight: this.props.data.topRight,
			bottomLeft: this.props.data.bottomLeft,
			bottomRight: this.props.data.bottomRight,
			isAll: this.props.isAll
		};
		handleButtonOnClick = isAll =>
			this.setState({
				isAll
			});
		handleOnChange = data => {
			this.setState({ ...data });
			return this.props.onChange(data);
		};
		render() {
			const { onChange } = this.props;
			const { topLeft, topRight, bottomLeft, bottomRight, isAll } = this.state;
			return (
				<WrappedComponent
					data={{
						topLeft,
						topRight,
						bottomLeft,
						bottomRight
					}}
					onChange={this.handleOnChange}
					onClick={this.handleButtonOnClick}
					// style={style}
					isAll={isAll}
					// specialStyle={specialStyle}
				/>
			);
		}
	};

const BorderOption = control(ControlledBorderOption);

export { BorderOption, ControlledBorderOption };
