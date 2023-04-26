import styled from '@emotion/styled/macro';
import { GrUserAdd } from 'react-icons/gr';
import { RxAvatar } from 'react-icons/rx';
import { TbCloudUpload } from 'react-icons/tb';

export const AddContactContainer = styled.div`
  width: calc(100% - 1.25em);
  min-height: 100%;
  margin: 0 auto;
  padding: 0 0.5em;
`;

export const AddDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 7.5em);
  margin-top: 3em;
  border-radius: 0.5em;
  background-color: #ffffffcc;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
  padding: 1.25em 0.75em 0em 0.75em;
`;
export const Title = styled.h1`
  font-size: 1.5em;
  margin: 0 auto 1em;
`;

export const ContainerForm = styled.div`
  display: flex;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25em;
`;

export const Input = styled.input`
  height: 2em;
  padding-left: 2em;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 0.5em;
  background-color: #ffffffcc;
  &:focus {
    outline: none;
    border: 1px solid #2196f3;
  }
`;

export const InputHidden = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  line-height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4em;
  height: 2em;
  margin: 0 auto;
  background: linear-gradient(90deg, #ee82ee 0%, #673ab7 50%, #9c27b0 100%);
  cursor: pointer;
  border: none;
  border-radius: 0.5em;
  box-shadow: 0 0 0.5em #333;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 0.5em #111;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const IconAddContact = styled(GrUserAdd)``;

export const AvatarIcon = styled(RxAvatar)`
  position: relative;
  opacity: 1;
  width: 100%;
  height: 100%;
  color: #a8aaab;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const UploadIcon = styled(TbCloudUpload)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  width: 90%;
  height: 90%;
  color: #a8aaab;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ButtonAvatar = styled.button`
  position: relative;
  align-self: center;
  width: 8em;
  height: 8em;
  border-radius: 50%;
  border: none;
  background-color: #edf5fa;
  cursor: pointer;
  &:hover,
  &:focus {
    ${AvatarIcon} {
      opacity: 0;
    }
    ${UploadIcon} {
      opacity: 1;
    }
  }
`;
