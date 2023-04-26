import React from 'react';
import { useRouter } from 'next/router';
import { Border, BoxRow, Container, Spacing } from 'mainlib/components';
import { Top03 } from 'mainlib/components/Top';
import { colors } from 'mainlib/constants/colors';

export default function IndexPage() {
  const { push } = useRouter();

  return (
    <div className="bg-white">
      <Spacing size={20} />
      <Top03 color={colors.gray900}>{`OpenAI - Project`}</Top03>
      <Spacing size={48} />
      <Border size={16} />
      <Spacing size={8} />
      <Container>
        <BoxRow onClick={() => push('/completion')}>Completion Mode</BoxRow>
        <BoxRow onClick={() => push('/chat')}>Chat Mode</BoxRow>
        <BoxRow onClick={() => push('/create-image')}>Create Image</BoxRow>
      </Container>
    </div>
  );
}
