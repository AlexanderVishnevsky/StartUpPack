import * as React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';

import { makeStaticProps, getStaticPaths } from '@/server/getStaticLang';

function About() {
    const { t } = useTranslation('common');
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    {t('title')}
                </Typography>
            </Box>
        </Container>
    );
}

const getStaticProps: GetStaticProps = makeStaticProps(['common']);

export { getStaticPaths, getStaticProps };

export default About;
