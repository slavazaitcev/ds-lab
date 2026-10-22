import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import type { TooltipArrow } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Компоненты/Tooltip',
  component: Tooltip,
  parameters: { layout: 'padded' },
  argTypes: {
    arrow: {
      control: 'select',
      options: [
        'none',
        'top-left', 'top-center', 'top-right',
        'bottom-left', 'bottom-center', 'bottom-right',
        'left', 'right',
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

const DESC = 'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.';

export const Playground: Story = {
  args: {
    title: 'This is a tooltip',
    arrow: 'top-left',
  },
};

/** Все 9 позиций стрелки — без описания */
export const AllArrows: Story = {
  name: 'Все позиции стрелки',
  render: () => {
    const positions: TooltipArrow[] = [
      'top-left', 'top-center', 'top-right',
      'left', 'none', 'right',
      'bottom-left', 'bottom-center', 'bottom-right',
    ];
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: 24, padding: 24 }}>
        {positions.map((arrow) => (
          <Tooltip key={arrow} title="This is a tooltip" arrow={arrow} />
        ))}
      </div>
    );
  },
};

/** Все 9 позиций стрелки — с описанием */
export const AllArrowsWithDescription: Story = {
  name: 'Все позиции стрелки + описание',
  render: () => {
    const positions: TooltipArrow[] = [
      'top-left', 'top-center', 'top-right',
      'left', 'none', 'right',
      'bottom-left', 'bottom-center', 'bottom-right',
    ];
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: 24, padding: 24 }}>
        {positions.map((arrow) => (
          <Tooltip key={arrow} title="This is a tooltip" description={DESC} arrow={arrow} />
        ))}
      </div>
    );
  },
};

/** С расширением (children-слот) */
export const WithExtension: Story = {
  name: 'С Extension',
  render: () => (
    <div style={{ display: 'flex', gap: 24, padding: 24 }}>
      <Tooltip title="This is a tooltip" arrow="top-left">
        <button style={{ fontSize: 13, cursor: 'pointer' }}>Подробнее</button>
      </Tooltip>
      <Tooltip title="This is a tooltip" description={DESC} arrow="bottom-center">
        <button style={{ fontSize: 13, cursor: 'pointer' }}>Подробнее</button>
      </Tooltip>
    </div>
  ),
};
