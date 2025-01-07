import styled from 'styled-components';

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const AboutTitle = styled.h1`
  color: #2c7eb8;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AboutSection = styled.section`
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

export const SectionText = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const FeatureCard = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 6px;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
`;

export const FeatureTitle = styled.h3`
  color: #2c7eb8;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const FeatureDescription = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
`;
