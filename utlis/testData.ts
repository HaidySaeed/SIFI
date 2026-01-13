export const formData = {
  user: {
    firstName: 'sifi',
    lastName: 'test',
    email: `sifi${Math.floor(Math.random() * 10000)}@test.com`,
  phone: `+9665${Math.floor(10000000 + Math.random() * 90000000)}`, // full number including +966
    companyName: `TestCompany${Math.floor(Math.random() * 10000)}`
  },

  options: {
    jobTitle: 'CTO',
    companyIndustry: 'Technology',
    companySize: '50-249'
  }
};
