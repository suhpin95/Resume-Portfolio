import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import s from './SideDrawer.module.scss';
import Backdrop from '../../UIElements/Backdrop/Backdrop';

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const SideDrawer = ({ children, show, onClose, id }) => {
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!show) return undefined;

    previousFocusRef.current = document.activeElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !drawerRef.current) return;

      const focusable = Array.from(
        drawerRef.current.querySelectorAll(FOCUSABLE),
      ).filter((element) => element.getClientRects().length > 0);

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
      document.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, [show, onClose]);

  return (
    <>
      {show && <Backdrop onClick={onClose} />}

      <CSSTransition
        in={show}
        timeout={240}
        classNames="slide-in-left"
        mountOnEnter
        unmountOnExit
        nodeRef={drawerRef}
      >
        <aside
          ref={drawerRef}
          id={id}
          className={s.drawer}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className={s.top}>
            <span className={s.label}>Menu</span>
            <button
              ref={closeButtonRef}
              type="button"
              className={s.close}
              onClick={onClose}
              aria-label="Close navigation menu"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className={s.body}>{children}</div>
        </aside>
      </CSSTransition>
    </>
  );
};

export default SideDrawer;
