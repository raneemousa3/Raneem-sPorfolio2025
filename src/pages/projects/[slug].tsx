import Head from 'next/head';
import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { projects, type Project } from '../../data/projects';
import styles from '../../components/Projects.module.css';

export default function ProjectNotes({ project }: { project: Project }) {
  return (
    <main className={styles.notesPage}>
      <Head>
        <title>{project.title} | Raneem Mousa</title>
        <meta name="description" content={project.description} />
      </Head>
      <Link href="/#projects" className={styles.detailLink}>← Back to the lookbook</Link>
      <article className={styles.notesFrame}>
        <p className={styles.coverEyebrow}>{project.eyebrow}</p>
        <h1 className={styles.notesTitle}>{project.title}</h1>
        <p className={styles.projectStatus}>{project.status}</p>
        <p className={styles.notesRole}>{project.role}</p>
        <p>{project.description}</p>
        {project.sections?.map((section) => (
          <section key={section.title} className={styles.notesSection}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </section>
        ))}
        <div className={styles.projectTags}>
          {project.tags.map((tag) => <span key={tag} className={styles.projectTag}>{tag}</span>)}
        </div>
        <a href="mailto:mousa@wustl.edu" className={styles.detailLink}>Let’s talk about this work →</a>
      </article>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.filter((project) => project.slug).map((project) => ({ params: { slug: project.slug! } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((item) => item.slug === params?.slug);
  return project ? { props: { project } } : { notFound: true };
};
