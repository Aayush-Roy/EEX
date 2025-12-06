import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProfilePage from '@/components/profilePage_temp';

const teamMembers = [
  {
    id: 'michael',
    name: 'MICHAEL BUCZEK',
    role: 'Narrative & Creative Direction',
    image: '/profiles/michael.png',
    descriptionImage: {
      desktop: '/descriptions/michael-desk.png',
      tablet: '/descriptions/michael-desk.png',
      mobile: '/descriptions/michael-mob.png',
    },
  },
  {
    id: 'sanjay',
    name: 'SANJAY SAHNI',
    role: 'Visual Development',
    image: '/profiles/sanjay.png',
    descriptionImage: {
      desktop: '/descriptions/sanjay-desk.png',
      tablet: '/descriptions/sanjay-desk.png',
      mobile: '/descriptions/sanjay-mob.png',
    },
  },
  {
    id: 'abhishek',
    name: 'ABHISHEK PATHAK',
    role: 'Cinematography & Story Design',
    image: '/profiles/abhishek.png',
    descriptionImage: {
      desktop: '/descriptions/abhishek-desk.png',
      tablet: '/descriptions/abhishek-desk.png',
      mobile: '/descriptions/abhishek-mob.png',
    },
  },
  {
    id: 'charu',
    name: 'CHARU CHANDIRAM',
    role: 'Technical Direction',
    image: '/profiles/charu.png',
    descriptionImage: {
      desktop: '/descriptions/charu-desk.png',
      tablet: '/descriptions/charu-desk.png',
      mobile: '/descriptions/charu-mob.png',
    },
  },
  {
    id: 'nisha',
    name: 'NISHA SINGH',
    role: 'Cinematography & Story Design',
    image: '/profiles/nisha.png',
    descriptionImage: {
      desktop: '/descriptions/nisha-desk.png',
      tablet: '/descriptions/nisha-desk.png',
      mobile: '/descriptions/nisha-mob.png',
    },
  },
  {
    id: 'shivang',
    name: 'SHIVANG SHEKHAR SINGH',
    role: 'Production & Photography',
    image: '/profiles/shivang.png',
    descriptionImage: {
      desktop: '/descriptions/shivang-desk.png',
      tablet: '/descriptions/shivang-desk.png',
      mobile: '/descriptions/shivang-mob.png',
    },
  },
];


const Profile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [member, setMember] = useState<typeof teamMembers[0] | null>(null);

  useEffect(() => {
    if (typeof id === 'string') {
      const found = teamMembers.find((m) => m.id === id);
      setMember(found ?? null);
    }
  }, [id]);

  if (!member) {
    return <div className="text-white text-center p-10">Profile not found</div>;
  }

  return <ProfilePage member={member} team={teamMembers} />;
};

export default Profile;
