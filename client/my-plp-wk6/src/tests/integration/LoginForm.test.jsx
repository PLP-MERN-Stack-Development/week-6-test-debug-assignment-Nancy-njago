import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../../../src/components/LoginForm'; // Ensure this path is correct

describe('LoginForm Component', () => {
  // Debug helper to check the imported component
  beforeAll(() => {
    if (process.env.NODE_ENV === 'test') {
      console.log('LoginForm type:', typeof LoginForm);
    }
  });

  // Basic render test
  it('should render without crashing', () => {
    render(<LoginForm />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  // Test form inputs
  it('should have email and password fields', () => {
    render(<LoginForm />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  // Test form submission
  it('should submit when button is clicked', async () => {
    const mockSubmit = jest.fn(e => e.preventDefault());
    render(<LoginForm onSubmit={mockSubmit} />);
    
    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'password123');
    await userEvent.click(screen.getByRole('button', { name: /login/i }));
    
    expect(mockSubmit).toHaveBeenCalled();
  });
});