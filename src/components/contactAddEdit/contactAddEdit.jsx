import { ContainerUtils } from '../elements/utilsContainer/utilsContainer.styled';
import { Title } from '../elements/title/title.styled';
import ButtonCommon from 'components/elements/button/button';
import { Form, Label, Input } from '../elements/form/form.styled';
import {
  ContainerForm,
  InputHidden,
  ButtonAvatar,
  AvatarIcon,
  UploadIcon,
} from './contactAddEdit.styled';

export default function ContactAddEdit({
  title,
  titleButton,
  handleSubmit,
  name,
  phone,
  handlePick,
  avatarPicker,
  email,
}) {
  return (
    <ContainerUtils>
      <Title>{title}</Title>
      <ContainerForm>
        <Form onSubmit={handleSubmit}>
          {/* ========== Avatar ========== */}
          <Label>
            <ButtonAvatar onClick={handlePick} type="button">
              <AvatarIcon />
              <UploadIcon />
            </ButtonAvatar>
            <InputHidden
              ref={avatarPicker}
              type="file"
              name="avatar"
              accept="image/*,.png,.jpeg,.webp"
            />
          </Label>
          {/* ========== Avatar ========== */}
          <Label>
            <Input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            <Input
              type="tel"
              name="number"
              defaultValue={phone}
              placeholder="Phone number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Label>
            <Input
              type="email"
              name="email"
              defaultValue={email}
              placeholder="Email"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              title="The email address must be set to letters and contain @, it must not contain spaces, dashes, or parentheses. "
            />
          </Label>
          <ButtonCommon titleButton={titleButton} />
        </Form>
      </ContainerForm>
    </ContainerUtils>
  );
}
