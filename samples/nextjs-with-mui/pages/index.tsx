import * as React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTranslation } from 'next-i18next';

export default function Home() {
    const { t } = useTranslation('main');
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
