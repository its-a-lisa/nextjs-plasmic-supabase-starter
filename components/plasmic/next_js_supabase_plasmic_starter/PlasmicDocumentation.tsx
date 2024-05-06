// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3tzMpJm6XNAEc8PSE2554T
// Component: IYdko1MsEB-H

"use client";

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/host";

import Layout from "../../Layout"; // plasmic-import: NVPq-3SR60hB/component
import Body from "../../Body"; // plasmic-import: iMUlEAuTPQf8/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: LulP9vjpN0to/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: 3tzMpJm6XNAEc8PSE2554T/projectcss
import sty from "./PlasmicDocumentation.module.css"; // plasmic-import: IYdko1MsEB-H/css

createPlasmicElementProxy;

export type PlasmicDocumentation__VariantMembers = {};
export type PlasmicDocumentation__VariantsArgs = {};
type VariantPropType = keyof PlasmicDocumentation__VariantsArgs;
export const PlasmicDocumentation__VariantProps = new Array<VariantPropType>();

export type PlasmicDocumentation__ArgsType = {};
type ArgPropType = keyof PlasmicDocumentation__ArgsType;
export const PlasmicDocumentation__ArgProps = new Array<ArgPropType>();

export type PlasmicDocumentation__OverridesType = {
  root?: Flex__<"div">;
  layout?: Flex__<typeof Layout>;
  body?: Flex__<typeof Body>;
  h1?: Flex__<"h1">;
  text?: Flex__<"div">;
};

export interface DefaultDocumentationProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDocumentation__RenderFunc(props: {
  variants: PlasmicDocumentation__VariantsArgs;
  args: PlasmicDocumentation__ArgsType;
  overrides: PlasmicDocumentation__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root,
            {
              [projectcss.global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            }
          )}
        >
          <Layout
            data-plasmic-name={"layout"}
            data-plasmic-override={overrides.layout}
          >
            <Body
              data-plasmic-name={"body"}
              data-plasmic-override={overrides.body}
              className={classNames("__wab_instance", sty.body)}
            >
              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1
                )}
              >
                {"Documentation"}
              </h1>
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                <React.Fragment>
                  <React.Fragment>
                    {
                      "If you haven't already done so, go back and learn the basics by going through the Plasmic Levels tutorial.\n\nIt's always easier to start from examples! Add a new page using a template\u2014do this from the list of pages in the top toolbar.\n\nOr press the big blue + button to start inserting items into this page.\n\nIntegrate this project into your codebase\u2014press the "
                    }
                  </React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"Code"}
                  </span>
                  <React.Fragment>
                    {
                      " button in the top right and follow the quickstart instructions.\n\nJoin our Slack community (icon in bottom left) for help any time."
                    }
                  </React.Fragment>
                </React.Fragment>
              </div>
            </Body>
          </Layout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "layout", "body", "h1", "text"],
  layout: ["layout", "body", "h1", "text"],
  body: ["body", "h1", "text"],
  h1: ["h1"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  layout: typeof Layout;
  body: typeof Body;
  h1: "h1";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDocumentation__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDocumentation__VariantsArgs;
    args?: PlasmicDocumentation__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDocumentation__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDocumentation__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDocumentation__ArgProps,
          internalVariantPropNames: PlasmicDocumentation__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDocumentation__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDocumentation";
  } else {
    func.displayName = `PlasmicDocumentation.${nodeName}`;
  }
  return func;
}

export const PlasmicDocumentation = Object.assign(
  // Top-level PlasmicDocumentation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    layout: makeNodeComponent("layout"),
    body: makeNodeComponent("body"),
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicDocumentation
    internalVariantProps: PlasmicDocumentation__VariantProps,
    internalArgProps: PlasmicDocumentation__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicDocumentation;
/* prettier-ignore-end */
