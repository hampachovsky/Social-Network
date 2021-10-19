import { fireEvent, render, screen } from '@testing-library/react';
import ProfileStatus from 'components/Profile/ProfileInfo/ProfileStatus';

const props = {
  status: 'test status',
  updateUserStatus: jest.fn(),
};

describe('ProfileStatus component', () => {
  it('status from props should be in the state', () => {
    render(<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />);
    expect(screen.getByText(props.status)).toBeInTheDocument();
  });

  it('edit mode changed to true, and input value should be correct', () => {
    render(<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />);
    fireEvent.doubleClick(screen.getByTestId('status'));
    expect(screen.getByTestId('editStatus')).toHaveValue(props.status);
  });

  it('edit mode changed to false, and status should be correct', () => {
    render(<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />);
    fireEvent.doubleClick(screen.getByTestId('status'));
    fireEvent.focusOut(screen.getByTestId('editStatus'));
    expect(screen.getByText(props.status)).toBeInTheDocument();
  });

  it('input value should be changed when type', async () => {
    render(<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />);
    fireEvent.doubleClick(screen.getByTestId('status'));
    fireEvent.change(screen.getByTestId('editStatus'), {
      target: { value: 'new test value' },
    });
    expect(screen.getByTestId('editStatus')).toHaveValue('new test value');
  });

  it('status should be changed after blur', async () => {
    const { rerender } = render(
      <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
    );
    fireEvent.doubleClick(screen.getByTestId('status'));
    fireEvent.change(screen.getByTestId('editStatus'), {
      target: { value: 'new test value' },
    });
    fireEvent.focusOut(screen.getByTestId('editStatus'));
    rerender(<ProfileStatus status={'new test value'} updateUserStatus={props.updateUserStatus} />);
    expect(screen.getByText('new test value')).toBeInTheDocument();
  });

  it('cb should be called', () => {
    render(<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />);
    fireEvent.doubleClick(screen.getByTestId('status'));
    fireEvent.focusOut(screen.getByTestId('editStatus'));
    expect(props.updateUserStatus).toBeCalled();
  });
});
