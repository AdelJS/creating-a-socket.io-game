import Text from '../../lib/text';

export default function ( options ) {
  const { x, y } = options;

  const text = Text.setup({
    x, y,
    text: 'remaining time',
    fontSize: 16
  });

  const timeLeft = Text.setup({
    x: x,
    y: y + 10,
    text: '03:25',
    fontSize: 14,
    color: '#777777'
  });

  return [ text, timeLeft ];
}