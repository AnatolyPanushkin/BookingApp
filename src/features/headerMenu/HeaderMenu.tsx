'use client';
import { Box } from '@mui/material';
import s from './ui/headerMenuStyles.module.scss';
import Link from 'next/link';
import { headerLinksClient } from '@/features/headerMenu/constants/headerLinksClient';
import { HomeIcon } from '@/shared/icons';

export const HeaderMenu = () => {
	return (
		<Box className={s.wrapper}>
			<Box className={s.wrapper_content}>
				<Link href='/'>
					<HomeIcon />
				</Link>
				<Box className={s.wrapper_content_icons}>
					{headerLinksClient.map((item) => (
						<Link href={item.link} key={item.link}>
							{item.icon}
						</Link>
					))}
				</Box>
			</Box>
		</Box>
	);
};