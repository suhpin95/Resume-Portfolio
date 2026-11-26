import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Backdrop from '../UIElements/Backdrop/Backdrop';
import s from './Modal.module.scss';

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const Modal = ({ children, show, onClose, labelledBy }) => {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!show) return undefined;

    previousFocusRef.current = document.activeElement;
    document.body.classList.add('overflow-hidden');

    const timer = window.setTimeout(() => {
      const first = modalRef.current?.querySelector(FOCUSABLE);
      first?.focus();
    }, 20);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) return;

      const focusable = Array.from(modalRef.current.querySelectorAll(FOCUSABLE)).filter(
        (element) => element.getClientRects().length > 0,
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
      previousFocusRef.current?.focus?.();
    };
  }, [show, onClose]);

  return (
    <div className={s.container}>
      {show && <Backdrop onClick={onClose} />}

      <CSSTransition
        in={show}
        timeout={240}
        classNames="modal"
        mountOnEnter
        unmountOnExit
        nodeRef={modalRef}
      >
        <div
          ref={modalRef}
          className={s.modal}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledBy}
        >
          <button
            type="button"
            className={s.close}
            onClick={onClose}
            aria-label="Close dialog"
          >
            <span aria-hidden="true">×</span>
          </button>

          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Modal;
