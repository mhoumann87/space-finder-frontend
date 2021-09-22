import { Component } from 'react';
import './ConfirmModal.css';

interface ConfirmModalProps {
  show: boolean;
  content: string;
  close: () => void;
}

export class ConfirmModal extends Component<ConfirmModalProps> {
  render() {
    if (!this.props.show) {
      return null;
    } else {
      return (
        <div className='modal'>
          <div className='modal__content'>
            <h2 className='modal__content--title'>
              You Tried to Reserve a Space
            </h2>
            <p className='modal__content--text'>{this.props.content}</p>
            <button
              onClick={() => this.props.close()}
              className='btn modal__btn'>
              Close
            </button>
          </div>
        </div>
      );
    }
  }
}
