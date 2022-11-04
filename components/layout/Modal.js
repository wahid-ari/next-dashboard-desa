import Button from "@components/systems/Button";
import Container from "@components/systems/Container";
import Heading from "@components/systems/Heading";
import Text from "@components/systems/Text";
import { useRef } from "react";

export default function Modal({
  modal,
  isHidden,
  isDanger,
  onDismiss,
  onConfirm,
}) {
  const ref = useRef();
  const onCancel = (e) => {
    console.log(e);
    e.stopPropagation();
    onDismiss();
  };

  const onOutsideClick = (e) => {
    if (e.target === ref.current) {
      onDismiss(e);
    }
  };
  return (
    <div
      ref={ref}
      onClick={onOutsideClick}
      className={`${modal.show ? "opacity-100" : "opacity-0"} ${
        isHidden ? "hidden" : ""
      } transition-all fixed top-0 left-0 h-screen w-screen bg-opacity-70 bg-black z-[51] grid place-items-center`}
    >
      <Container
        className={`${modal.show ? "scale-100" : "scale-50"} ${
          isHidden ? "hidden" : ""
        } transition-all border-2 !p-6 !mb-0 !rounded-lg w-[38rem] max-w-[calc(100vw_-_4rem)]`}
      >
        <Heading>{modal.title}</Heading>
        <Text.semibold>{modal.desc}</Text.semibold>
        <br />
        <Text>{modal.content}</Text>
        <br />
        <div className="flex items-center justify-end gap-2">
          <Button.secondary onClick={onCancel}>Batal</Button.secondary>
          <Button
            className={`${
              isDanger
                ? "!bg-red-600 dark:!bg-red-600 hover:!bg-red-700 dark:hover:!bg-red-700"
                : ""
            }`}
            onClick={onConfirm}
          >
            Konfirmasi
          </Button>
        </div>
      </Container>
    </div>
  );
}
