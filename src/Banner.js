import React from 'react';

export default function Banner(props) {
  return (
    props.name ? <h1>{props.name} wins!</h1> : null
  );
}
