import React from 'react';
import './index.less';

interface IProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}

export default function MenuIcon(props: IProps) {
  const { onOpen, onClose, isOpen } = props;
  const handleClick = () => {
    isOpen ? onClose() : onOpen();
  };

  return (
    <div className="c-menu-icon" onClick={handleClick}>
      {[1, 2, 3].map((i) => (
        <div className={`c-menu-icon-line${isOpen ? ' opened' : ''}`} key={i} />
      ))}
    </div>
  );
}
