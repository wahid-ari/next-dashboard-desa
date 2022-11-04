import Link from "next/link";
import { useState } from "react";
import * as yup from "yup";
import useToast from "@utils/useToast";
import useModal from "@utils/useModal";
import Badge from "@components/systems/Badge";
import Button from "@components/systems/Button";
import Card from "@components/systems/Card";
import Checkbox from "@components/systems/Checkbox";
import Container from "@components/systems/Container";
import Dropdown from "@components/systems/Dropdown";
import Heading from "@components/systems/Heading";
import Input from "@components/systems/Input";
import Label from "@components/systems/Label";
import LabeledInput from "@components/systems/LabeledInput";
import LinkButton from "@components/systems/LinkButton";
import MultipleSelect from "@components/systems/MultipleSelect";
import Modal from "@components/layout/Modal";
import Progress from "@components/systems/Progress";
import Radio from "@components/systems/Radio";
import Section from "@components/systems/Section";
import Shell from "@components/layout/Shell";
import Shimer from "@components/systems/Shimer";
import Tab from "@components/systems/Tab";
import Table from "@components/systems/Table";
import Tag from "@components/systems/Tag";
import Text from "@components/systems/Text";
import Title from "@components/systems/Title";

export default function Example() {
  const { modal, isHidden, dismissModal, revealModal } = useModal();
  const [showMultiSelect, setShowMultiSelect] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);
  const [popOver, setPopOver] = useState({ show: false, value: null });
  const { updateToast, pushToast, dismissToast } = useToast();
  const [user, setUser] = useState({
    username: "",
    email: "",
    angka: "",
    angka_positif: "",
  });

  const handleShowMultiSelect = () => {
    setShowMultiSelect(!showMultiSelect);
  };

  const handleMultiSelect = (e) => {
    if (!multiSelect.includes(e.currentTarget.value)) {
      setMultiSelect([...multiSelect, e.currentTarget.value]);
    }
    setShowMultiSelect(false);
  };

  const multiSelectPopItem = (e) => {
    // prevent clickable parent get clicked
    e.stopPropagation();
    setMultiSelect(
      multiSelect.filter(
        (p, i) => i !== parseInt(e.currentTarget.getAttribute("value"))
      )
    );
  };

  const handleDropdownShow = () => {
    setPopOver({ ...popOver, show: !popOver.show });
  };

  const handleValueDropdown = (e) => {
    setPopOver({ show: false, value: e.currentTarget.getAttribute("value") });
  };

  const addToast = () => {
    pushToast({ message: "This is a toast message", isError: false });
  };

  const addToastError = () => {
    pushToast({ message: "This is a toast message", isError: true });
  };

  const toastAsync = () => {
    const toastId = pushToast({
      message: "Loading Posting Data",
      isLoading: true,
    });
    setTimeout(() => {
      updateToast({ toastId, message: "Posting Data Success", isError: false });
    }, 3000);
  };

  let userSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username harus diisi")
      .matches(/^[A-Za-z]+$/, "Username harus berupa huruf"),
    email: yup
      .string()
      .email("Email harus valid")
      .required("Email harus diisi")
      .typeError("Email harus validwetewt"),
    angka: yup
      .number()
      .required("Angka harus diisi")
      .integer("Angka harus berupa integer bukan float")
      .typeError("Angka harus valid"),
    angka_positif: yup
      .number()
      .required("Angka harus diisi")
      .positive("Angka harus positif")
      .integer("Angka harus berupa integer bukan float")
      .typeError("Angka harus valid"),
  });

  const checker = async (schema, param) => {
    try {
      await schema.validate(param, { abortEarly: false });
      return { valid: true };
    } catch (err) {
      return { valid: false, errors: err.errors };
    }
  };

  const checkValid = async () => {
    try {
      const { valid, errors } = await checker(userSchema, user);
      if (!valid && errors) {
        dismissToast();
        errors.forEach((el) => {
          pushToast({ message: el, isError: true });
        });
      }
      console.log(valid);
    } catch (e) {
      console.log(e);
    }
  };

  const handleUserChange = (e) => {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleShowModal = () => {
    revealModal({
      title: "Modal Title",
      desc: "Modal Desc",
      content: "Modal Content",
    });
  };

  const [tabIndex, setTabIndex] = useState(0);

  const handleChangeTab = (e) => {
    setTabIndex(parseInt(e.target.value));
  };

  const onConfirm = () => {
    console.log("confirm");
    // your code before dismiss
    dismissModal();
  };

  const onNext = () => { };

  const onPrev = () => { };

  return (
    <Shell title="Design System">
      <Title>Example</Title>
      <Section
        id="tableofcontent"
        name="Table of Content"
        noChildren
        noClassName
        noProps
      >
        <div className="columns-2 sm:columns-3 text-blue-600 dark:text-sky-500">
          <span className="underline block mb-3">
            <Link href="#validation">Validation (yup)</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#usemodal">
              useModal (hook require Modal component)
            </Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#usetoast">useToast (hook)</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#badge">Badge</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#button">Button</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#checkbox">Checkbox</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#container">Container</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#dropdown">Dropdown</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#dropdownitem">Dropdown.item</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#heading">Heading</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#input">Input</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#inputdisabled">Input.disabled</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#label">Label</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#labeledinput">LabeledInput</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#labeledinputdisabled">LabeledInput.disabled</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#linkbutton">LinkButton</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#multipleselect">MultipleSelect</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#multipleselect.item">MultipleSelect.item</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#progress">Progress</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#radio">Radio</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#shimer">Shimer</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#tab">Tab</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#tabitem">Tab.item</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#table">Table</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#tabletr">Table.tr</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#tabletd">Table.td</Link>
          </span>
          <span className="underline block mb-3">
            <Link href="#text">Text</Link>
          </span>
        </div>
      </Section>
      <Section id="validation" name="Validation" noChildren noClassName noProps>
        <LabeledInput
          label="Username"
          name="username"
          value={user.username}
          placeholder="Username"
          onChange={handleUserChange}
        />
        <LabeledInput
          label="Email"
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={handleUserChange}
        />
        <LabeledInput
          label="Angka"
          name="angka"
          value={user.angka}
          placeholder="Angka"
          onChange={handleUserChange}
        />
        <LabeledInput
          label="Angka Positif"
          name="angka_positif"
          value={user.angka_positif}
          placeholder="Number Positif"
          onChange={handleUserChange}
        />
        <Button onClick={checkValid}>Submit</Button>
      </Section>
      <Section
        id="usemodal"
        name="useModal (hook require Modal component)"
        noChildren
        noClassName
        noProps
      >
        <code className="dark:text-white">
          {`import useModal from '@utils/useModal()'`}
          <br />
          {`import Modal from '@components/layout/Modal'`}
          <br />
          <br />
          {`const { modal, isHidden, dismissModal, revealModal } = useModal();`}
          <br />
          <br />
          {`const onConfirm = () => {`}
          <br />
          &nbsp;&nbsp;
          {`// your code before dismiss`}
          <br />
          &nbsp;&nbsp;
          {`dismissModal()`}
          <br />
          {`};`}
          <br />
          <br />
          {`<Modal modal={modal} isHidden={isHidden} onDismiss={dismissModal} onConfirm={onConfirm} />`}
          <br />
          <br />
          {`with danger`}
          <br />
          {`<Modal modal={modal} isHidden={isHidden} onDismiss={dismissModal} onConfirm={onConfirm} isDanger />`}
          <br />
        </code>
        <br />
        <br />
        <Button onClick={handleShowModal}>Show Modal</Button>
        <Modal
          modal={modal}
          isHidden={isHidden}
          onDismiss={dismissModal}
          onConfirm={onConfirm}
        />
      </Section>
      <Section
        id="usetoast"
        name="useToast (hook)"
        noProps
        noChildren
        noClassName
      >
        <code className="dark:text-white">
          {`// pushToast({message, isError})`}
          <br />
          {`// in case you want to push new toast`}
          <br />
          <br />
          {`// updateToast({id, message, isError})`}
          <br />
          {`// in case you want to update toast`}
          <br />
          <br />
          {`// dismissToast()`}
          <br />
          {`// in case you want to dismiss all toast`}
          <br />
          {`// look validation for example`}
          <br />
          <br />
          {`import useToast from '@utils/useToast()'`}
          <br />
          <br />
          {`const { updateToast, pushToast, dismissToast } = useToast();`}
          <br />
          <br />
          {`const addToast = () => {`}
          <br />
          &nbsp;&nbsp;
          {`pushToast({ message: "This is a toast message", isError: false });`}
          <br />
          {`};`}
          <br />
          <br />
          {`const addToastError = () => {`}
          <br />
          &nbsp;&nbsp;
          {`pushToast({ message: "This is a toast message", isError: true });`}
          {`};`}
          <br />
          <br />
          {`const toastAsync = () => {`}
          <br />
          &nbsp;&nbsp;{`const toastId = pushToast({`}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          {`message: "Loading Posting Data",`}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;{`isLoading: true,`}
          <br />
          &nbsp;&nbsp;{`});`}
          <br />
          &nbsp;&nbsp;{`setTimeout(() => {`}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          {`updateToast({ toastId, message: "Posting Data Success", isError: false });`}
          <br />
          &nbsp;&nbsp;{`}, 3000);`}
          <br />
          {`};`}
        </code>
      </Section>
      <div className="flex flex-wrap items-center gap-2">
        <Button onClick={addToast}>Show Me Toast</Button>
        <Button onClick={addToastError}>Show Me Error Toast</Button>
        <Button onClick={toastAsync}>Toast with async</Button>
      </div>
      <Section
        id="badge"
        name="Badge"
        variant={["dark", "red", "green", "yellow", "indigo", "pink"]}
        props={["isLarge"]}
      >
        <div className="flex items-center flex-wrap gap-y-2">
          <Badge>blue</Badge>
          <Badge.dark>dark</Badge.dark>
          <Badge.red>red</Badge.red>
          <Badge.green>green</Badge.green>
          <Badge.yellow>yellow</Badge.yellow>
          <Badge.indigo>indigo</Badge.indigo>
          <Badge.purple>purple</Badge.purple>
          <Badge.pink>pink</Badge.pink>
        </div>
        <br />
        <br />
        <div className="flex items-center flex-wrap gap-y-2">
          <Badge isLarge>blue</Badge>
          <Badge.dark isLarge>dark</Badge.dark>
          <Badge.red isLarge>red</Badge.red>
          <Badge.green isLarge>green</Badge.green>
          <Badge.yellow isLarge>yellow</Badge.yellow>
          <Badge.indigo isLarge>indigo</Badge.indigo>
          <Badge.purple isLarge>purple</Badge.purple>
          <Badge.pink isLarge>pink</Badge.pink>
        </div>
      </Section>
      <Section
        id="button"
        name="Button"
        variant={["secondary", "tertary"]}
        props={["type", "value", "disabled", "onClick"]}
      >
        <div className="flex flex-wrap items-center gap-2">
          <Button>Hei there, primary button</Button>
          <Button.secondary>Hei there, secondary button</Button.secondary>
          <Button.tertary>Hei there, tertary button</Button.tertary>
        </div>
      </Section>
      <Section
        id="checkbox"
        name="Checkbox"
        variant={["disabled"]}
        props={["name", "label", "value", "onChange", "defaultChecked"]}
        noClassName
        noChildren
      >
        <Checkbox name="checkbox 1" label="Checkbox" />
        <Checkbox.disabled name="Disabled Checkbox" />
        <Checkbox.disabled name="Disabled Checked Checkbox" defaultChecked />
      </Section>
      <Section id="container" name="Container" props={["small"]} noWrap>
        <Container>
          <Text>Content</Text>
        </Container>
      </Section>
      <Section
        id="dropdown"
        name="Dropdown"
        props={["id", "name", "label", "show", "value", "onClick", "onBlur"]}
      >
        <Dropdown
          label="Dropdown"
          show={popOver.show}
          value={popOver.value ?? "Pilih Salah Satu"}
          onBlur={handleDropdownShow}
          onClick={handleDropdownShow}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => {
            return (
              <Dropdown.item
                key={i}
                value={`Item ${i}`}
                onClick={handleValueDropdown}
              >
                Item {i}
              </Dropdown.item>
            );
          })}
        </Dropdown>
      </Section>
      <Section id="dropdownitem" name="Dropdown.item" noClassName noWrap />
      <Section id="heading" name="Heading" props={["h1", "h2", "h3"]}>
        <Heading h1>Heading 1</Heading>
        <Heading h2>Heading 2</Heading>
        <Heading h3>Heading 3</Heading>
        <Heading>Heading 4 (default)</Heading>
      </Section>
      <Section
        id="input"
        name="Input"
        props={["type", "name", "placeholder", "value", "onChange"]}
      >
        <Input name="input" placeholder="Input default" />
      </Section>
      <Section
        id="inputdisabled"
        name="Input.disabled"
        props={["type", "name", "placeholder", "defaultValue"]}
      >
        <Input.disabled
          name="input"
          placeholder="Input default"
          defaultValue="Has a value"
        />
      </Section>
      <Section id="label" name="Label">
        <Label>Ut deserunt do est irure.</Label>
      </Section>
      <Section
        id="labeledinput"
        name="LabeledInput"
        props={[
          "id",
          "label",
          "name",
          "type",
          "placeholder",
          "value",
          "onChange",
        ]}
      >
        <LabeledInput
          label="Email"
          name="email"
          placeholder="Email"
          type="text"
        />
        <LabeledInput
          label="Password"
          name="password"
          placeholder="Your Password"
          type="password"
        />
      </Section>
      <Section
        id="labeledinputdisabled"
        name="LabeledInput.disabled"
        props={["label", "type", "name", "placeholder", "defaultValue"]}
      >
        <LabeledInput.disabled
          label="Confirmation Password"
          name="confirmation"
          placeholder="confirmation"
          type="password"
        />
      </Section>
      <Section
        id="linkbutton"
        name="LinkButton"
        variant={["secondary", "tertary"]}
        props={["href"]}
      >
        <div className="flex flex-wrap items-center gap-2">
          <LinkButton href="/">Link to some page</LinkButton>
          <LinkButton.secondary href="/">
            Link to some page
          </LinkButton.secondary>
          <LinkButton.tertary href="/">Link to some page</LinkButton.tertary>
        </div>
      </Section>
      <Section
        id="multipleselect"
        name="MultipleSelect"
        props={["label", "show", "value", "onClick", "onBlur"]}
        noClassName
        noProps
      >
        <MultipleSelect
          label="Multiple Select"
          onClick={handleShowMultiSelect}
          onBlur={handleShowMultiSelect}
          show={showMultiSelect}
          value={multiSelect.map((p, i) => (
            <Tag key={i} value={i} onClick={multiSelectPopItem}>
              {p}
            </Tag>
          ))}
        >
          <MultipleSelect.item value="Option 1" onClick={handleMultiSelect}>
            <Tag noX>Option 1</Tag>
          </MultipleSelect.item>
          <MultipleSelect.item value="Option 2" onClick={handleMultiSelect}>
            <Tag noX>Option 2</Tag>
          </MultipleSelect.item>
          <MultipleSelect.item value="Option 3" onClick={handleMultiSelect}>
            <Tag noX>Option 3</Tag>
          </MultipleSelect.item>
          <MultipleSelect.item value="Option 4" onClick={handleMultiSelect}>
            <Tag noX>Option 4</Tag>
          </MultipleSelect.item>
          <MultipleSelect.item value="Option 5" onClick={handleMultiSelect}>
            <Tag noX>Option 5</Tag>
          </MultipleSelect.item>
          <MultipleSelect.item value="Option 6" onClick={handleMultiSelect}>
            <Tag noX>Option 6</Tag>
          </MultipleSelect.item>
          <MultipleSelect.item value="Option 7" onClick={handleMultiSelect}>
            <Tag noX>Option 7</Tag>
          </MultipleSelect.item>
          <MultipleSelect.item value="Option 8" onClick={handleMultiSelect}>
            <Tag noX>Option 8</Tag>
          </MultipleSelect.item>
          <MultipleSelect.item value="Option 9" onClick={handleMultiSelect}>
            <Tag noX>Option 9</Tag>
          </MultipleSelect.item>
        </MultipleSelect>
      </Section>
      <Section
        id="multipleselectitem"
        name="MultipleSelect.item"
        noClassName
        noWrap
      />
      <Section
        id="progress"
        name="Progress"
        variant={["percentage"]}
        props={["percent"]}
        noChildren
        noProps
      >
        <Progress percent={45} />
        <br />
        <Progress.percentage percent={0} />
        <br />
        <Progress.percentage percent={75} />
      </Section>
      <Section
        id="radio"
        name="Radio"
        variant={["disabled"]}
        props={["name", "label", "value", "onChange", "checked"]}
        noClassName
        noChildren
      >
        <Radio name="radio" label="Radio" />
        <Radio name="radio" label="Disabled Radio" />
        <Radio name="radio" label="Disabled Checked Radio" defaultChecked />
      </Section>
      <Section id="shimer" name="Shimer" noChildren noProps>
        <Card sx="!bg-white dark:!bg-neutral-900">
          <Shimer className="max-w-[5rem]" />
          <Shimer className="max-w-[16rem]" />
          <Shimer className="max-w-[16rem]" />
          <Shimer className="max-w-[16rem]" />
          <Shimer className="max-w-[16rem]" />
        </Card>
      </Section>
      <Section id="tab" name="Tab" noProps noWrap>
        <Tab className="mb-6">
          <Tab.item value={0} isActive={tabIndex === 0} onClick={handleChangeTab}>Tab 1</Tab.item>
          <Tab.item value={1} isActive={tabIndex === 1} onClick={handleChangeTab}>Tab 2</Tab.item>
          <Tab.item value={2} isActive={tabIndex === 2} onClick={handleChangeTab}>Tab 3</Tab.item>
          <Tab.item value={3} isActive={tabIndex === 3} onClick={handleChangeTab}>Tab 4</Tab.item>
          <Tab.item disabled>Disabled Tab</Tab.item>
        </Tab>
        {tabIndex === 0 ? (
          <div className="mb-6 pl-2">
            <Heading>Tab Content 1</Heading>
          </div>
        ) : tabIndex === 1 ? (
          <div className="mb-6 pl-2">
            <Heading>Tab Content 2</Heading>
          </div>
        ) : tabIndex === 2 ? (
          <div className="mb-6 pl-2">
            <Heading>Tab Content 3</Heading>
          </div>
        ) : (
          <div className="mb-6 pl-2">
            <Heading>Tab Content 4</Heading>
          </div>
        )
        }
      </Section>
      <Section
        id="tabitem"
        name="Tab.item"
        props={["value", "onClick", "isActive", "disabled"]}
        noWrap
      />
      <Section
        id="table"
        name="Table"
        props={[
          "head",
          "totalPage",
          "totalData",
          "currentPage",
          "next",
          "prev",
        ]}
        noProps
        noWrap
      >
        <Table
          totalPage={5}
          totalData={50}
          currentPage={1}
          next={onNext}
          prev={onPrev}
          head={
            <>
              <Table.td shrink>No</Table.td>
              <Table.td>Column 1</Table.td>
              <Table.td>Column 2</Table.td>
              <Table.td>Column 3</Table.td>
              <Table.td>Column 4</Table.td>
              <Table.td>Column 5</Table.td>
              <Table.td>Column 6</Table.td>
              <Table.td>Column 7</Table.td>
              <Table.td>Column 8</Table.td>
            </>
          }
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, index) => {
            return (
              <Table.tr key={index}>
                <Table.td shrink>{index + 1}</Table.td>
                <Table.td>
                  <Badge>badge</Badge>
                </Table.td>
                <Table.td>
                  <Badge.red>badge red</Badge.red>
                </Table.td>
                <Table.td>
                  <Badge.dark>badge dark</Badge.dark>
                </Table.td>
                <Table.td>
                  <Badge.green>badge green</Badge.green>
                </Table.td>
                <Table.td>
                  <Badge.yellow>badge yellow</Badge.yellow>
                </Table.td>
                <Table.td>
                  <Badge.indigo>badge indigo</Badge.indigo>
                </Table.td>
                <Table.td>
                  <Badge.purple>badge purple</Badge.purple>
                </Table.td>
                <Table.td>
                  <Badge.pink>badge pink</Badge.pink>
                </Table.td>
              </Table.tr>
            );
          })}
        </Table>
      </Section>
      <Section id="tabletr" name="Table.tr" noWrap />
      <Section id="tabletd" name="Table.td" props={["shrink"]} noWrap />
      <Section
        id="text"
        name="Text"
        variant={["semibold", "bold", "extrabold"]}
      >
        <Text>Halo semuanya</Text>
      </Section>
    </Shell>
  );
}
