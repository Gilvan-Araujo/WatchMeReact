import styles from '../styles/button.module.scss';

import { ButtonHTMLAttributes } from 'react';

import { Icon } from './Icon';

// extends ButtonHTMLAttributes<HTMLButtonElement>
interface ButtonProps {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
}

export function Button({ iconName, title, selected, ...rest }: ButtonProps) {
  return (
    <button className={styles.button} type="button" {...(selected && { className: styles.selected })} {...rest}>
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </button>
  );
}