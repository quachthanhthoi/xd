import React from 'react';
import { Button, Image, Popup } from 'semantic-ui-react';
import { action } from '@storybook/addon-actions';
// Icon for group 1
import verticalalignment2 from '../../icon/vertical-alignment-2.svg';
import verticalalignment3 from '../../icon/vertical-alignment-3.svg';
import verticalalignment from '../../icon/vertical-alignment.svg';
import verticalalignment1 from '../../icon/vertical-alignment-1.svg';
// Icon for group 2
import leftalignment from '../../icon/left-alignment.svg';
import horizontalalignment1 from '../../icon/horizontal-alignment-1.svg';
import rightalignment from '../../icon/right-alignment.svg';
import horizontalalignment from '../../icon/horizontal-alignment.svg';

const ButtonGroup = () =>
  <table
    style={{ 'border-collapse': 'collapse', 'background-color': '#f7f7f7' }}
  >
    <tr>
      <th
        style={{ border: '1px solid #e4e4e4', 'border-collapse': 'collapse' }}
      >
        <Button.Group style={{ padding: '0px' }}>
          <Popup
            trigger={
              <Button
                icon={<Image src={verticalalignment2} width="20" height="20" />}
                onClick={action('Align top')}
                style={{ backgroundColor: '#f7f7f7', 'border-style': 'none' }}
              />
            }
            content="Align top"
          />
          <Popup
            trigger={
              <Button
                icon={<Image src={verticalalignment3} width="20" height="20" />}
                onClick={action('Align middle')}
                style={{ backgroundColor: '#f7f7f7', 'border-style': 'none' }}
              />
            }
            content="Align middle"
          />
          <Popup
            trigger={
              <Button
                icon={<Image src={verticalalignment} width="20" height="20" />}
                onClick={action('Align bottom')}
                style={{ backgroundColor: '#f7f7f7', 'border-style': 'none' }}
              />
            }
            content="Align bottom"
          />
          <Popup
            trigger={
              <Button
                icon={
                  <Image
                    src={verticalalignment1}
                    width="20"
                    height="20"
                    style={{ opacity: 0.25 }} // button disable
                  />
                }
                onClick={action('Distribute horizontally')}
                style={{ backgroundColor: '#f7f7f7', 'border-style': 'none' }}
              />
            }
            content="Distribute horizontally"
          />
        </Button.Group>
      </th>

      <th
        style={{ border: '1px solid #e4e4e4', 'border-collapse': 'collapse' }}
      >
        <Button.Group style={{ padding: '0px' }}>
          <Popup
            trigger={
              <Button
                icon={<Image src={leftalignment} width="20" height="20" />}
                onClick={action('Align left')}
                style={{ backgroundColor: '#f7f7f7', 'border-style': 'none' }}
              />
            }
            content="Align left"
          />
          <Popup
            trigger={
              <Button
                icon={
                  <Image src={horizontalalignment1} width="20" height="20" />
                }
                onClick={action('Align center')}
                style={{ backgroundColor: '#f7f7f7', 'border-style': 'none' }}
              />
            }
            content="Align center"
          />
          <Popup
            trigger={
              <Button
                icon={<Image src={rightalignment} width="20" height="20" />}
                onClick={action('Align right')}
                style={{ backgroundColor: '#f7f7f7', 'border-style': 'none' }}
              />
            }
            content="Align right"
          />
          <Popup
            trigger={
              <Button
                icon={
                  <Image
                    src={horizontalalignment}
                    width="20"
                    height="20"
                    style={{ opacity: 0.25 }} // button disable
                  />
                }
                onClick={action('Distribute vertically')}
                style={{ backgroundColor: '#f7f7f7', 'border-style': 'none' }}
              />
            }
            content="Distribute vertically"
          />
        </Button.Group>
      </th>
    </tr>
  </table>;
export default ButtonGroup;
