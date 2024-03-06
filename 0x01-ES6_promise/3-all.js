import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();
    console.log(`${photoResponse.body.firstName} ${userResponse.body.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}

export default handleProfileSignup;
