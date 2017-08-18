import React, { Component } from 'react';
import { Button, Icon, Popup } from 'semantic-ui-react';

const gridButton = {
	Repeat: ['Repeat Grid', 'object group'],
	Ungroup: ['Ungroup Grid', 'object ungroup']
};

const wrapButtonWithPopup = (button, content) => {
	return <Popup hoverable={false} trigger={button} content={content} />;
};

const ControlledGroupButton = ({
	gridButtonValue,
	onGridButtonClick,
	arrangeStatus,
	onArrangeButtonClick
}) => {
	return (
		<div>
			<span>
				{wrapButtonWithPopup(
					<Button
						basic
						icon={gridButton[gridButtonValue][1]}
						content={gridButton[gridButtonValue][0]}
						onClick={onGridButtonClick}
					/>,
					`${gridButtonValue} Grid`
				)}
				<Button.Group inverted>
					{Array(4).fill(null).map((val, idx) =>
						wrapButtonWithPopup(
							<Button
								style={{ borderStyle: 'none' }}
								inverted
								disabled={!arrangeStatus.activeArrange}
								icon
								onClick={onArrangeButtonClick(idx)}
							>
								{idx == 3
									? <Icon.Group>
											<Icon
												inverted
												name="random"
												color={arrangeStatus.arranges[idx] ? 'blue' : 'black'}
											/>
											<Icon
												corner
												name="minus square"
												color={arrangeStatus.arranges[idx] ? 'blue' : 'black'}
											/>
										</Icon.Group>
									: <Icon
											inverted
											name={arrangeStatus.icons[idx]}
											color={arrangeStatus.arranges[idx] ? 'blue' : 'black'}
										/>}
							</Button>,
							arrangeStatus.content[idx]
						)
					)}
				</Button.Group>
			</span>
		</div>
	);
};

const control = WrappedComponent =>
	class extends Component {
		constructor(props) {
			super(props);
			this.state = {
				gridButtonValue: 'Repeat',
				arrangeStatus: {
					activeArrange: props.activeArrange,
					arranges: [false, false, false, false],
					icons: ['compress', 'expand', 'random', 'minus square'],
					content: ['Add', 'Subtract', 'Intersect', 'Exclude Overlap']
				}
			};
		}

		handleGridButtonClick = () => {
			this.setState({
				gridButtonValue:
					this.state.gridButtonValue == 'Repeat' ? 'Ungroup' : 'Repeat'
			});
		};

		handleArrangeButtonClick = index => () => {
			let newArranges = [...this.state.arrangeStatus.arranges];
			newArranges[index] ? newArranges : (newArranges = Array(4).fill(false));
			newArranges[index] = !newArranges[index];
			this.setState({
				arrangeStatus: {
					...this.state.arrangeStatus,
					arranges: newArranges
				}
			});
		};

		componentDidUpdate = () => {
			this.props.onChange(this.state);
		};

		componentWillReceiveProps = nextProps => {
			nextProps.activeArrange !== this.props.activeArrange &&
				this.setState({
					arrangeStatus: {
						...this.state.arrangeStatus,
						activeArrange: nextProps.activeArrange
					}
				});
		};

		render() {
			const { gridButtonValue, arrangeStatus } = this.state;
			return (
				<WrappedComponent
					gridButtonValue={gridButtonValue}
					onGridButtonClick={this.handleGridButtonClick}
					arrangeStatus={arrangeStatus}
					onArrangeButtonClick={this.handleArrangeButtonClick}
				/>
			);
		}
	};

const UncontrolledGroupButton = control(ControlledGroupButton);
export { ControlledGroupButton, UncontrolledGroupButton };
