export default function SocialLogin() {
  const getParm = new URL(window.location.href).searchParams.get('jwt');
  if (getParm) {
    localStorage.setItem('token', '');
    localStorage.setItem('token', getParm);
    window.location.replace('/');
  }
  return (<div />);
}
