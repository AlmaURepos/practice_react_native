import { useCallback } from 'react';

interface Props {
  onClick: () => void;
}

export const Button = ({ onClick }: Props) => {
  const handleClick = useCallback(() => {
    console.log('Button clicked');
    onClick();
  }, [onClick]);

  console.log('Button rendered');

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        marginBottom: '20px'
      }}
    >
      Increment Count
    </button>
  );
};
