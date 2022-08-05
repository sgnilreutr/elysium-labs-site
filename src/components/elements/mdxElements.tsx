export const Heading = {
  H1: (props: any) => {
    return <h1 className="text-center my-8" {...props} />
  },
  H2: (props: any) => {
    return <h2 className="text-center my-8" {...props} />
  },
}

export const Text = (props: any) => <p {...props} />

export const Hyperlink = (props: any) => <a className="underline" {...props} />
