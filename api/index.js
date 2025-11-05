var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});

// app/globals.css
var globals_default = "/build/_assets/globals-J6OE5IF5.css";

// app/root.tsx
var import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/components/Nav.tsx
var import_react2 = require("react"), import_react3 = require("@remix-run/react"), import_io = require("react-icons/io"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Index(aluno) {
  var _a, _b, _c, _d, _e;
  let [navbar, setNavbar] = (0, import_react2.useState)(!1), activeClassName = "text-orange-500", NoaActiveClassName = "text-orange-white";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: " w-[97%] md:w-full rounded-md  mx-auto  bg-stone-300 print:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "justify-between  pl-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between py-3 md:py-5 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.NavLink, { to: "/", className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "img",
        {
          src: "/logo_preto.svg",
          className: "mr-2 h-7 md:h-10",
          alt: "Quattor Logo"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Nav.tsx",
          lineNumber: 16,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Nav.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      ((_a = aluno.aluno) == null ? void 0 : _a.idMember) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-1 md:ml-14", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "img",
            {
              src: aluno.aluno.photoUrl ? aluno.aluno.photoUrl : "/user.png",
              alt: "avatar",
              className: "h-9 w-9 mr-2 md:w-12 md:h-12 rounded-full shadow-md "
            },
            void 0,
            !1,
            {
              fileName: "app/components/Nav.tsx",
              lineNumber: 25,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: aluno.aluno.firstName.substring(0, 9) }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 32,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Nav.tsx",
          lineNumber: 24,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.NavLink, { to: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_io.IoIosLogOut, { className: " ml-4 w-6 h-6" }, void 0, !1, {
          fileName: "app/components/Nav.tsx",
          lineNumber: 35,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/Nav.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Nav.tsx",
        lineNumber: 23,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "button",
        {
          className: "p-1 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border",
          onClick: () => setNavbar(!navbar),
          children: navbar ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_io.IoMdClose, { className: "w-8 h-8" }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 45,
            columnNumber: 19
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_io.IoMdMenu, { className: "w-8 h-8" }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 47,
            columnNumber: 19
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Nav.tsx",
          lineNumber: 41,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Nav.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "div",
      {
        className: `flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.NavLink,
            {
              onClick: () => setNavbar(!navbar),
              to: "/",
              className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
              children: "HOME"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Nav.tsx",
              lineNumber: 60,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 59,
            columnNumber: 15
          }, this),
          ((_b = aluno.aluno) == null ? void 0 : _b.idMember) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.NavLink,
            {
              to: "/aluno",
              prefetch: "render",
              onClick: () => setNavbar(!navbar),
              className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
              children: "TREINOS"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Nav.tsx",
              lineNumber: 71,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 70,
            columnNumber: 17
          }, this),
          ((_c = aluno.aluno) == null ? void 0 : _c.idMember) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.NavLink,
            {
              to: "/especial",
              prefetch: "render",
              onClick: () => setNavbar(!navbar),
              className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
              children: "ESPECIAIS"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Nav.tsx",
              lineNumber: 84,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.NavLink,
            {
              to: "/login",
              prefetch: "render",
              onClick: () => setNavbar(!navbar),
              className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
              children: "ALUNO"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Nav.tsx",
              lineNumber: 97,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 96,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: " md:hidden font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.NavLink,
            {
              to: "/spinning",
              onClick: () => setNavbar(!navbar),
              className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
              children: "SPINNING"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Nav.tsx",
              lineNumber: 108,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, this),
          ((_d = aluno.aluno) == null ? void 0 : _d.idMember) === 4 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.NavLink,
            {
              to: "/aluno/planejamento",
              onClick: () => setNavbar(!navbar),
              className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
              children: "PLANEJAMENTO"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Nav.tsx",
              lineNumber: 120,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 119,
            columnNumber: 17
          }, this),
          ((_e = aluno.aluno) == null ? void 0 : _e.idMember) === 17841 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              import_react3.NavLink,
              {
                to: "/cadastro",
                onClick: () => setNavbar(!navbar),
                className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
                children: "CADASTRO"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Nav.tsx",
                lineNumber: 133,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Nav.tsx",
              lineNumber: 132,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              import_react3.NavLink,
              {
                to: "/cadaulas",
                onClick: () => setNavbar(!navbar),
                className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
                children: "AULAS"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Nav.tsx",
                lineNumber: 143,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Nav.tsx",
              lineNumber: 142,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              import_react3.NavLink,
              {
                to: "/treinos",
                onClick: () => setNavbar(!navbar),
                className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
                children: "LISTA"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Nav.tsx",
                lineNumber: 153,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Nav.tsx",
              lineNumber: 152,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              import_react3.NavLink,
              {
                to: "/bancotreino",
                onClick: () => setNavbar(!navbar),
                className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
                children: "MONTAGEM"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Nav.tsx",
                lineNumber: 163,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Nav.tsx",
              lineNumber: 162,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              import_react3.NavLink,
              {
                to: "/aluno/grupo",
                onClick: () => setNavbar(!navbar),
                className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
                children: "GRUPOS"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Nav.tsx",
                lineNumber: 173,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Nav.tsx",
              lineNumber: 172,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 131,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Nav.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Nav.tsx",
        lineNumber: 54,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Nav.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Nav.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/session.server.ts
var import_node = require("@remix-run/node"), SESSION_SECRET = process.env.SESSION_SECRET, { getSession, commitSession, destroySession } = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    maxAge: 6e4,
    path: "/",
    sameSite: "lax",
    secrets: [SESSION_SECRET],
    secure: !1
  }
});

// app/utils/aluno.server.ts
var import_date_fns = require("date-fns");

// app/utils/prisma.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/utils/aluno.server.ts
var import_web_fetch = __toESM(require("@remix-run/web-fetch")), import_uuid = require("uuid"), EVO_AUTH = process.env.NEXT_PUBLIC_EVO_AUTH, getAluno = async (matricula) => (await (0, import_web_fetch.default)(
  `https://evo-integracao.w12app.com.br/api/v1/members/basic?idMember=${matricula}&take=1&skip=0`,
  {
    method: "GET",
    headers: {
      Authorization: "Basic " + btoa(EVO_AUTH)
    }
  }
)).json();
var getAlunoGym = async (matricula) => {
  if (!matricula)
    return null;
  try {
    return (await (0, import_web_fetch.default)(
      `https://evo-integracao.w12app.com.br/api/v1/members?take=50&skip=0&idsMembers=${matricula}&onlyPersonal=false&showActivityData=false`,
      {
        method: "GET",
        headers: {
          Authorization: "Basic " + btoa(EVO_AUTH)
        }
      }
    )).json();
  } catch (error) {
    throw error;
  }
}, getAlunoNome = async (nome) => {
  if (!nome)
    return null;
  try {
    return (await (0, import_web_fetch.default)(
      `https://evo-integracao.w12app.com.br/api/v1/members?name=${nome}&status=1&take=50&skip=0&onlyPersonal=false`,
      {
        method: "GET",
        headers: {
          Authorization: "Basic " + btoa(EVO_AUTH)
        }
      }
    )).json();
  } catch (error) {
    throw error;
  }
}, getTreinos = async (semana) => prisma.treinos.findMany({
  where: {
    semana
  }
});
var updateHistorico = async (historico) => prisma.historico.upsert({
  where: {
    aluno: parseInt(historico.aluno)
  },
  update: {
    treinos: {
      push: {
        treino: historico.treino ? historico.treino : historico.treinolivre,
        data: new Date(),
        semana: (0, import_date_fns.getWeek)(new Date())
      }
    }
  },
  create: {
    aluno: parseInt(historico.aluno),
    treinos: {
      treino: historico.treino,
      data: new Date(),
      semana: (0, import_date_fns.getWeek)(new Date())
    }
  }
}), updateHistoricoExe = async (historico) => prisma.historicoExercicios.upsert({
  where: {
    aluno: parseInt(historico.aluno)
  },
  update: {
    histexe: {
      push: {
        grupo: historico.treino,
        data: new Date(),
        carga: historico.carga,
        nome: historico.exenome,
        obs: historico.obs
      }
    }
  },
  create: {
    aluno: parseInt(historico.aluno),
    histexe: {
      grupo: historico.treino,
      data: new Date(),
      carga: historico.carga,
      nome: historico.exenome,
      obs: historico.obs
    }
  }
});
var getGrupos = async () => prisma.grupo.findMany(), deleteAluno = async (aluno) => prisma.grupo.update({
  where: {
    id: aluno.id
  },
  data: {
    alunos: {
      deleteMany: {
        where: {
          idMember: Number(aluno.idMember)
        }
      }
    }
  }
});
var getHistoricoSemana = async () => prisma.historico.findMany(), getHistorico = async (historico) => historico ? prisma.historico.findUnique({
  where: {
    aluno: parseInt(historico)
  }
}) : null, getHistoricoExe = async (historico) => historico ? prisma.historicoExercicios.findUnique({
  where: {
    aluno: parseInt(historico)
  }
}) : null;

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: globals_default }], meta = () => ({
  charset: "utf-8",
  title: "Quattor Academia",
  viewport: "width=device-width,initial-scale=1"
}), loader = async ({ request }) => {
  var _a, _b;
  let session = await getSession(request.headers.get("Cookie"));
  if (!((_a = session.get("aluno")) != null && _a.id))
    return null;
  let aluno = (await getAluno((_b = session.get("aluno")) == null ? void 0 : _b.id))[0];
  return (0, import_node2.json)(aluno);
};
function App() {
  let aluno = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "pt", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Index, { aluno }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

// app/routes/aluno.planejamento_bak.tsx
var aluno_planejamento_bak_exports = {};
__export(aluno_planejamento_bak_exports, {
  default: () => Planejamento,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_fa = require("react-icons/fa");

// app/components/ui/button.tsx
var React = __toESM(require("react")), import_react_slot = require("@radix-ui/react-slot"), import_class_variance_authority = require("class-variance-authority");

// app/lib/utils.ts
var import_clsx = require("clsx"), import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// app/components/ui/button.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary"
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = React.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    asChild ? import_react_slot.Slot : "button",
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/button.tsx",
      lineNumber: 45,
      columnNumber: 7
    },
    this
  )
);
Button.displayName = "Button";

// app/components/ui/input.tsx
var React2 = __toESM(require("react"));
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), Input = React2.forwardRef(
  ({ className, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "input",
    {
      type,
      className: cn(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/input.tsx",
      lineNumber: 11,
      columnNumber: 7
    },
    this
  )
);
Input.displayName = "Input";

// app/routes/aluno.planejamento_bak.tsx
var import_react5 = require("@remix-run/react");

// app/components/ui/table.tsx
var React3 = __toESM(require("react"));
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), Table = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 10,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 9,
  columnNumber: 3
}, this));
Table.displayName = "Table";
var TableHeader = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }, void 0, !1, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 23,
  columnNumber: 3
}, this));
TableHeader.displayName = "TableHeader";
var TableBody = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 31,
    columnNumber: 3
  },
  this
));
TableBody.displayName = "TableBody";
var TableFooter = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "tfoot",
  {
    ref,
    className: cn("bg-primary font-medium text-primary-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 43,
    columnNumber: 3
  },
  this
));
TableFooter.displayName = "TableFooter";
var TableRow = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 55,
    columnNumber: 3
  },
  this
));
TableRow.displayName = "TableRow";
var TableHead = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "th",
  {
    ref,
    className: cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 70,
    columnNumber: 3
  },
  this
));
TableHead.displayName = "TableHead";
var TableCell = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 85,
    columnNumber: 3
  },
  this
));
TableCell.displayName = "TableCell";
var TableCaption = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 97,
    columnNumber: 3
  },
  this
));
TableCaption.displayName = "TableCaption";

// app/routes/aluno.planejamento_bak.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader2 = async ({ request, params }) => {
  let par = new URL(request.url).searchParams.get("aluno"), alunos = await getAlunoNome(par);
  return (0, import_node3.json)({ alunos });
};
function Planejamento() {
  var _a;
  let nome = (0, import_react5.useFetcher)(), alunos = (_a = nome.data) == null ? void 0 : _a.alunos;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: " container mx-auto p-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(nome.Form, { method: "get", action: ".", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex w-full max-w-sm items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Input, { name: "aluno", type: "search", placeholder: "Pesquisar Aluno" }, void 0, !1, {
          fileName: "app/routes/aluno.planejamento_bak.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { name: "", className: " bg-stone-400", type: "submit", children: "Pesquisar" }, void 0, !1, {
          fileName: "app/routes/aluno.planejamento_bak.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno.planejamento_bak.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/aluno.planejamento_bak.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Table, { className: "w-1/2 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableCaption, { children: "Alunos " }, void 0, !1, {
          fileName: "app/routes/aluno.planejamento_bak.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableHead, { className: "w-[100px]", children: "Matr\xEDcula" }, void 0, !1, {
            fileName: "app/routes/aluno.planejamento_bak.tsx",
            lineNumber: 46,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableHead, { children: "Nome" }, void 0, !1, {
            fileName: "app/routes/aluno.planejamento_bak.tsx",
            lineNumber: 47,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableHead, {}, void 0, !1, {
            fileName: "app/routes/aluno.planejamento_bak.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno.planejamento_bak.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno.planejamento_bak.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableBody, { children: alunos == null ? void 0 : alunos.map((aluno) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableCell, { className: "font-medium", children: aluno.idMember }, void 0, !1, {
            fileName: "app/routes/aluno.planejamento_bak.tsx",
            lineNumber: 54,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableCell, { children: aluno.firstName + " " + aluno.lastName }, void 0, !1, {
            fileName: "app/routes/aluno.planejamento_bak.tsx",
            lineNumber: 55,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react5.Link,
            {
              to: `/aluno/planejamento/${aluno.idMember}`,
              className: "text-green-600 text-lg ",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_fa.FaUserCheck, { className: "text-lg" }, void 0, !1, {
                fileName: "app/routes/aluno.planejamento_bak.tsx",
                lineNumber: 60,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno.planejamento_bak.tsx",
              lineNumber: 57,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/aluno.planejamento_bak.tsx",
            lineNumber: 56,
            columnNumber: 17
          }, this)
        ] }, aluno.idMember, !0, {
          fileName: "app/routes/aluno.planejamento_bak.tsx",
          lineNumber: 53,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/aluno.planejamento_bak.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno.planejamento_bak.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno.planejamento_bak.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
      fileName: "app/routes/aluno.planejamento_bak.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno.planejamento_bak.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/routes/cadastro.$exercicios.tsx
var cadastro_exercicios_exports = {};
__export(cadastro_exercicios_exports, {
  default: () => Treino,
  loader: () => loader3
});
var import_react6 = require("@remix-run/react");

// app/utils/treinos.server.ts
var import_uuid2 = require("uuid"), getExercicios = async (id) => prisma.treinos.findUnique({
  where: {
    id
  }
}), getTreinos2 = async (semana) => prisma.treinos.findMany({
  where: {
    semana
  }
}), deleteExercicio = async (id, execid) => prisma.treinos.update({
  where: {
    id
  },
  data: {
    exercicios: {
      deleteMany: {
        where: {
          execid
        }
      }
    }
  }
}), updateCadastroTreino = async (id, nome, repeticoes, carga, obs, execid, video) => prisma.treinos.update({
  where: {
    id
  },
  data: {
    exercicios: {
      updateMany: {
        where: {
          execid
        },
        data: {
          nome,
          carga,
          obs,
          Repeticoes: repeticoes,
          video
        }
      }
    }
  }
}), updateTreino = async (treino) => {
  let existe = await prisma.treinos.findFirst({
    where: {
      grupo: treino.grupo,
      semana: +treino.semana
    },
    select: {
      id: !0
    }
  }), idTreino = existe ? Object.values(existe).toString() : "000000000000000000000000";
  return prisma.treinos.upsert({
    where: {
      id: idTreino
    },
    update: {
      exercicios: {
        push: {
          nome: treino.nome,
          Repeticoes: treino.repeticoes,
          carga: treino.carga,
          obs: treino.obs,
          video: treino.video,
          execid: (0, import_uuid2.v4)()
        }
      }
    },
    create: {
      grupo: treino.grupo,
      semana: +treino.semana,
      exercicios: {
        nome: treino.nome,
        Repeticoes: treino.repeticoes,
        carga: treino.carga,
        obs: treino.obs,
        video: treino.video,
        execid: (0, import_uuid2.v4)()
      }
    }
  });
};

// app/routes/cadastro.$exercicios.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), loader3 = async ({ request, params }) => await getExercicios(params.exercicios);
function Treino() {
  let { exercicios } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-center font-semibold mt-2 uppercase text-blue-600", children: "Exerc\xEDcios" }, void 0, !1, {
      fileName: "app/routes/cadastro.$exercicios.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex justify-center overflow-y-auto  max-h-[32rem] ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "table",
      {
        className: `w-3/4 text-sm text-left mt-4 
        text-gray-500 border-l-2 border-r-2 border-slate-100`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "thead",
            {
              className: `text-xs text-gray-700 uppercase
           bg-stone-100 dark:bg-gray-700 dark:text-gray-400`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { scope: "col", className: "px-6 py-1", children: "Nome" }, void 0, !1, {
                  fileName: "app/routes/cadastro.$exercicios.tsx",
                  lineNumber: 28,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { scope: "col", className: "px-6 py-1", children: "Repeticoes" }, void 0, !1, {
                  fileName: "app/routes/cadastro.$exercicios.tsx",
                  lineNumber: 31,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { scope: "col", className: "px-6 py-1 ", children: "Carga" }, void 0, !1, {
                  fileName: "app/routes/cadastro.$exercicios.tsx",
                  lineNumber: 34,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { scope: "col", className: "px-6 py-1 ", children: "Observa\xE7\xF5es" }, void 0, !1, {
                  fileName: "app/routes/cadastro.$exercicios.tsx",
                  lineNumber: 37,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { scope: "col", className: "px-6 py-1 ", children: "Video" }, void 0, !1, {
                  fileName: "app/routes/cadastro.$exercicios.tsx",
                  lineNumber: 40,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/cadastro.$exercicios.tsx",
                lineNumber: 27,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cadastro.$exercicios.tsx",
              lineNumber: 23,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("tbody", { children: exercicios.map((exec, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "tr",
            {
              className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                  "th",
                  {
                    scope: "row",
                    className: "px-6  font-medium text-gray-900 dark:text-white whitespace-nowrap",
                    children: exec.nome
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/cadastro.$exercicios.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "px-6 py-3 ", children: exec.Repeticoes }, void 0, !1, {
                  fileName: "app/routes/cadastro.$exercicios.tsx",
                  lineNumber: 57,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "px-6 py-3 ", children: exec.carga }, void 0, !1, {
                  fileName: "app/routes/cadastro.$exercicios.tsx",
                  lineNumber: 58,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "px-6 py-3 ", children: exec.obs }, void 0, !1, {
                  fileName: "app/routes/cadastro.$exercicios.tsx",
                  lineNumber: 59,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "px-6 py-3 ", children: exec.video }, void 0, !1, {
                  fileName: "app/routes/cadastro.$exercicios.tsx",
                  lineNumber: 60,
                  columnNumber: 17
                }, this)
              ]
            },
            index,
            !0,
            {
              fileName: "app/routes/cadastro.$exercicios.tsx",
              lineNumber: 47,
              columnNumber: 15
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/cadastro.$exercicios.tsx",
            lineNumber: 45,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/cadastro.$exercicios.tsx",
        lineNumber: 19,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/cadastro.$exercicios.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cadastro.$exercicios.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/aluno.spinning_bak.tsx
var aluno_spinning_bak_exports = {};
__export(aluno_spinning_bak_exports, {
  CatchBoundary: () => CatchBoundary,
  action: () => action,
  default: () => Index2
});
var import_node4 = require("@remix-run/node"), import_node5 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var import_react_hot_toast = __toESM(require("react-hot-toast")), import_react8 = require("react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), action = async ({ request }) => {
  let matricula = (await request.formData()).get("matricula"), aluno = await getAluno(matricula);
  if (!aluno.idMember)
    throw (0, import_node4.json)(
      { message: "Aluno n\xE3o Encontrado" },
      { status: 401, statusText: Math.floor(Math.random() * 15).toString() }
    );
  if (aluno.membershipStatus === "Inactive")
    throw (0, import_node4.json)(
      { message: "Aluno Inativo" },
      { status: 401, statusText: Math.floor(Math.random() * 15).toString() }
    );
  return (0, import_node5.redirect)(`/aluno/${aluno.idMember}`);
};
function Index2() {
  let transition = (0, import_react7.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "h-screen w-full bg-stone-100 font-Roboto ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bg-gradient-to-r from-[rgb(253,0,0)] to-[#ffa927]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text-gray-600 body-font bg-no-repeat min-h-screen bg-contain bg-center bg-[url('/bola50.svg')]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "h-full mt-24 items-center flex flex-col gap-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Form, { method: "post", className: "rounded-2xl bg-black p-6 w-96", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "matricula", className: "text-white font-semibold ", children: "N\xFAmero de Matricula" }, void 0, !1, {
      fileName: "app/routes/aluno.spinning_bak.tsx",
      lineNumber: 43,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "input",
      {
        className: "w-full p-2 rounded-xl my-2",
        type: "number",
        name: "matricula",
        required: !0
      },
      void 0,
      !1,
      {
        fileName: "app/routes/aluno.spinning_bak.tsx",
        lineNumber: 46,
        columnNumber: 15
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "button",
      {
        disabled: transition.state === "submitting" || transition.state === "loading",
        type: "submit",
        name: "Entrar",
        className: "" + transition.state == "loading" ? "rounded-xl mt-2  bg-blue-600 px-3 py-2 text-white font-semibold" : "rounded-xl mt-2  bg-orange-600 px-3 py-2 text-white font-semibold hover:bg-orange-400 hover:-translate-y-1",
        children: transition.state === "submitting" ? "Localizando..." : transition.state === "loading" ? "Carregando Treino" : "Entrar"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/aluno.spinning_bak.tsx",
        lineNumber: 53,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/aluno.spinning_bak.tsx",
      lineNumber: 52,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno.spinning_bak.tsx",
    lineNumber: 42,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/aluno.spinning_bak.tsx",
    lineNumber: 41,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/aluno.spinning_bak.tsx",
    lineNumber: 40,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/aluno.spinning_bak.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/aluno.spinning_bak.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  var _a;
  let transition = (0, import_react7.useTransition)(), caughtResponse = (0, import_react7.useCatch)(), message = (_a = caughtResponse.data) == null ? void 0 : _a.message, random = caughtResponse.statusText;
  return (0, import_react8.useEffect)(() => {
    (() => import_react_hot_toast.default.error(/* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: message }, void 0, !1, {
      fileName: "app/routes/aluno.spinning_bak.tsx",
      lineNumber: 87,
      columnNumber: 38
    }, this)))();
  }, [random, message]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "h-screen w-full bg-stone-100 font-Roboto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      import_react_hot_toast.Toaster,
      {
        toastOptions: {
          className: "",
          style: {
            padding: "12px",
            color: "#ffffff",
            background: "#f78e34"
          }
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/aluno.spinning_bak.tsx",
        lineNumber: 94,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Nav, {}, void 0, !1, {
      fileName: "app/routes/aluno.spinning_bak.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "h-full mt-24 items-center flex flex-col gap-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Form, { method: "post", className: "rounded-2xl bg-stone-200 p-6 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "label",
        {
          htmlFor: "matricula",
          className: "text-stone-600 font-semibold ",
          children: "N\xFAmero de Matricula"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno.spinning_bak.tsx",
          lineNumber: 108,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "input",
        {
          className: "w-full p-2 rounded-xl my-2",
          type: "number",
          name: "matricula",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno.spinning_bak.tsx",
          lineNumber: 113,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "button",
        {
          disabled: transition.state === "submitting" || transition.state === "loading",
          type: "submit",
          name: "Entrar",
          className: "" + transition.state == "loading" ? "rounded-xl mt-2  bg-blue-600 px-3 py-2 text-white font-semibold" : "rounded-xl mt-2  bg-green-600 px-3 py-2 text-white font-semibold hover:bg-orange-400 hover:-translate-y-1",
          children: transition.state === "submitting" ? "Localizando..." : transition.state === "loading" ? "Carregando Treino" : "Entrar"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno.spinning_bak.tsx",
          lineNumber: 144,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/aluno.spinning_bak.tsx",
        lineNumber: 143,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno.spinning_bak.tsx",
      lineNumber: 107,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno.spinning_bak.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno.spinning_bak.tsx",
    lineNumber: 93,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/aluno.spinning_bak.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

// app/routes/bancotreino.$grupo.tsx
var bancotreino_grupo_exports = {};
__export(bancotreino_grupo_exports, {
  action: () => action2,
  default: () => Grupocadastrado,
  loader: () => loader4
});
var import_node6 = require("@remix-run/node"), import_react9 = require("@remix-run/react");
var import_fa2 = require("react-icons/fa"), import_react10 = require("react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader4 = async ({ request, params }) => await getExercicios(params.grupo), action2 = async ({ request, params }) => {
  let form = await request.formData(), values = Object.fromEntries(form), treinos = await updateTreino(values);
  return (0, import_node6.redirect)(`${treinos.id}`);
};
function Grupocadastrado() {
  let { exercicios } = (0, import_react9.useLoaderData)(), [semana, setSemana] = (0, import_react10.useState)(""), [grupo, setGrupo] = (0, import_react10.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "select",
        {
          onChange: (event) => setSemana(event.target.value),
          id: "semana",
          name: "semana",
          className: `rounded-md col-span-2 border-2 form-control block
                          w-full `,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "01", children: "01 - (01/01 a 07/01)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 38,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "02", children: "02 - (08/01 a 14/01)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 39,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "03", children: "03 - (15/01 a 21/01)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 40,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "04", children: "04 - (22/01 a 28/01)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 41,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "05", children: "05 - (29/01 a 04/02)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "06", children: "06 - (05/02 a 11/02)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 43,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "07", children: "07 - (12/02 a 18/02)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 44,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "08", children: "08 - (19/02 a 25/02)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 45,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "09", children: "09 - (26/02 a 04/03)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "10", children: "10 - (05/02 a 11/03)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "11", children: "11 - (12/03 a 18/03)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "12", children: "12 - (19/03 a 25/03)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 49,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "13", children: "13 - (26/03 a 01/04)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 50,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "14", children: "14 - (02/04 a 08/04)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 51,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "15", children: "15 - (09/04 a 15/04)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 52,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "16", children: "16 - (16/04 a 22/04)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "17", children: "17 - (23/04 a 29/04)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 54,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "18", children: "18 - (30/04 a 06/05)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 55,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "19", children: "19 - (30/04 a 06/05)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "20", children: "20 - (07/05 a 13/05)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 57,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "21", children: "21 - (14/05 a 20/05)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 58,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "22", children: "22 - (21/05 a 27/05)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 59,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "23", children: "23 - (28/05 a 03/06)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "24", children: "24 - (04/06 a 10/06)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 61,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "25", children: "25 - (11/06 a 17/06)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "26", children: "26 - (18/06 a 24/06)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 63,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "27", children: "27 - (25/06 a 01/07)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 64,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "28", children: "28 - (02/07 a 08/07)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 65,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "29", children: "29 - (09/07 a 15/07)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 66,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "30", children: "30 - (16/07 a 22/07)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 67,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "31", children: "31 - (23/07 a 29/07)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 68,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "32", children: "32 - (06/07 a 12/07)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 69,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "33", children: "33 - (13/08 a 19/08)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 70,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "34", children: "34 - (20/08 a 26/08)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 71,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "35", children: "35 - (27/08 a 02/09)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 72,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "36", children: "36 - (03/09 a 09/09)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 73,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "37", children: "37 - (10/09 a 16/09)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 74,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "38", children: "38 - (17/09 a 23/08)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 75,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "39", children: "39 - (24/09 a 30/08)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 76,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "40", children: "40 - (01/10 a 07/10)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 77,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "41", children: "41 - (08/10 a 13/10)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 78,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "42", children: "42 - (15/10 a 21/10)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 79,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "43", children: "43 - (22/10 a 28/10)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 80,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "44", children: "44 - (29/10 a 04/11)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 81,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "45", children: "45 - (05/11 a 11/11)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 82,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "46", children: "46 - (12/11 a 18/11)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 83,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "47", children: "47 - (19/11 a 25/11)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 84,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "48", children: "48 - (26/11 a 02/12)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 85,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "49", children: "49 - (03/12 a 09/12)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 86,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "50", children: "50 - (10/12 a 16/12)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 87,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "51", children: "51 - (17/12 a 23/12)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 88,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "52", children: "52 - (24/12 a 30/12)" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 89,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/bancotreino.$grupo.tsx",
          lineNumber: 32,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "select",
        {
          onChange: (event) => setGrupo(event.target.value),
          id: "grupo",
          name: "grupo",
          className: `rounded-md border-2 form-control block
                          w-full col-span-2 bg-transparent  `,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "", children: "Selecione o grupo" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 97,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "PEITORAL", children: "PEITORAL" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 98,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "OMBROS", children: "OMBROS" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 99,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "MEMBROS SUPERIORES 1", children: "MEMBROS SUPERIORES 1" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 100,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "COSTAS", children: "COSTAS" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 101,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "MEMBROS SUPERIORES 2", children: "MEMBROS SUPERIORES 2" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 102,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "BICEPS", children: "BICEPS" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 103,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "TRICEPS", children: "TRICEPS" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 104,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "QUADS", children: "QUADS" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 105,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "POSTERIORES DE COXAS", children: "POSTERIORES DE COXAS" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 106,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "GLUTEOS", children: "GLUTEOS" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 107,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "PANTURRILHA", children: "PANTURRILHA" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 108,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "ABDOME", children: "ABDOME" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 109,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "MEMBROS INFERIORES GERAL", children: "MEMBROS INFERIORES GERAL" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 110,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "MEMBROS SUPERIORES GERAL", children: "MEMBROS SUPERIORES GERAL" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 113,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "INICIANTE 1", children: "INICIANTE 1" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 116,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "INICIANTE 2", children: "INICIANTE 2" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 117,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "INICIANTE 3", children: "INICIANTE 3" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 118,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "INICIANTE 4", children: "INICIANTE 4" }, void 0, !1, {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 119,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/bancotreino.$grupo.tsx",
          lineNumber: 91,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/bancotreino.$grupo.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid grid-cols-12 py-2 gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "col-span-3 font-light text-sm text-sky-500", children: "N\xFAmero" }, void 0, !1, {
          fileName: "app/routes/bancotreino.$grupo.tsx",
          lineNumber: 124,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "col-span-8 font-light text-sm text-sky-500", children: "Nome" }, void 0, !1, {
          fileName: "app/routes/bancotreino.$grupo.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/bancotreino.$grupo.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      exercicios.map((exec, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "py-1  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react9.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "input",
          {
            type: "text",
            defaultValue: semana,
            hidden: !0,
            name: "semana",
            id: "semana"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/bancotreino.$grupo.tsx",
            lineNumber: 132,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "input",
          {
            type: "text",
            defaultValue: grupo,
            hidden: !0,
            name: "grupo",
            id: "grupo"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/bancotreino.$grupo.tsx",
            lineNumber: 139,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid grid-cols-12  gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "input",
            {
              className: "col-span-2 bg-transparent",
              type: "text",
              id: "index",
              readOnly: !0,
              disabled: !0,
              defaultValue: index + 1
            },
            void 0,
            !1,
            {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 147,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "input",
            {
              hidden: !0,
              type: "text",
              id: "execid",
              name: "execid",
              defaultValue: exec.execid
            },
            void 0,
            !1,
            {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 155,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "input",
            {
              type: "text",
              id: "nome",
              name: "nome",
              readOnly: !0,
              defaultValue: exec.nome,
              className: "col-span-5 bg-transparent  "
            },
            void 0,
            !1,
            {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 163,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "input",
            {
              type: "text",
              id: "carga",
              name: "carga",
              hidden: !0,
              defaultValue: exec.carga,
              className: "col-span-2 bg-stone-50 border-b-2 "
            },
            void 0,
            !1,
            {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 172,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "input",
            {
              type: "text",
              id: "repeticoes",
              name: "repeticoes",
              hidden: !0,
              defaultValue: exec.Repeticoes,
              className: "col-span-2 bg-stone-50 border-b-2"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 181,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "input",
            {
              type: "text",
              id: "obs",
              name: "obs",
              hidden: !0,
              defaultValue: exec.obs,
              className: "col-span-3 text-sm bg-stone-50 border-b-2"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 190,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "input",
            {
              type: "text",
              id: "video",
              name: "video",
              hidden: !0,
              defaultValue: exec.video,
              className: "col-span-3 text-sm bg-stone-50 border-b-2"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 198,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid justify-items-center grid-cols-1 gap2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "button",
            {
              className: "flex content-center text-green-500 bg-stone-100 ",
              type: "submit",
              name: "_action",
              value: "save",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_fa2.FaSave, {}, void 0, !1, {
                fileName: "app/routes/bancotreino.$grupo.tsx",
                lineNumber: 213,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/bancotreino.$grupo.tsx",
              lineNumber: 208,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/bancotreino.$grupo.tsx",
            lineNumber: 207,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/bancotreino.$grupo.tsx",
          lineNumber: 146,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/bancotreino.$grupo.tsx",
        lineNumber: 131,
        columnNumber: 13
      }, this) }, exec.execid, !1, {
        fileName: "app/routes/bancotreino.$grupo.tsx",
        lineNumber: 130,
        columnNumber: 11
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/bancotreino.$grupo.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "text-center  font-semibold text-red-600 mt-6", children: [
      grupo + "  ",
      " ",
      semana
    ] }, void 0, !0, {
      fileName: "app/routes/bancotreino.$grupo.tsx",
      lineNumber: 222,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react9.Outlet, {}, void 0, !1, {
      fileName: "app/routes/bancotreino.$grupo.tsx",
      lineNumber: 225,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/bancotreino.$grupo.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/spinning.index_old.tsx
var spinning_index_old_exports = {};
__export(spinning_index_old_exports, {
  action: () => action3,
  default: () => Index3
});
var import_node7 = require("@remix-run/node"), import_react12 = require("@remix-run/react");

// app/components/Navbar.tsx
var import_react11 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Navbar2() {
  let activeClassName = "text-orange-500", NoaActiveClassName = "text-orange-white";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("nav", { className: "bg-black text-white border-gray-200 px-2  sm:px-4 py-2.5  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "container flex flex-wrap justify-between items-center mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react11.NavLink, { to: "/", className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "img",
      {
        src: "/logo_branco.svg",
        className: "mr-3 h-8 md:h-10",
        alt: "Quattor Logo"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 10,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex space-x-4 font-light", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        import_react11.NavLink,
        {
          to: "/",
          className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
          children: "HOME"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 17,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        import_react11.NavLink,
        {
          to: "/aluno",
          className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
          children: "TREINOS"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 24,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        import_react11.NavLink,
        {
          to: "/spinning",
          className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
          children: "SPINNING"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 31,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/spinning.index_old.tsx
var import_lodash = __toESM(require("lodash")), import_im = require("react-icons/im");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), action3 = async ({ request }) => {
  let matricula = (await request.formData()).get("matricula"), motivo = "", aluno = await getAluno(matricula), plano = import_lodash.default.filter(aluno.memberships, { membershipStatus: "active" }).map(
    (n) => n.name
  ), spinning = plano.filter(
    (s) => s.includes("FITNESS") || s.includes("SPINNING") || s.includes("TOTAL")
  ).length;
  if (!aluno.idMember)
    return motivo = "aluno nao encontrado", {
      message: "Aluno n\xE3o encontrado"
    };
  aluno.membershipStatus === "Inactive" && (motivo = "Inativo");
  let session = await getSession(request.headers.get("Cookie"));
  return session.set("aluno", {
    id: aluno.idMember,
    plano: plano.toString(),
    status: aluno.membershipStatus,
    motivo
  }), (0, import_node7.redirect)(`/spinning/${aluno.idMember}`, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};
function Index3() {
  let transition = (0, import_react12.useTransition)(), data = (0, import_react12.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "h-screen w-full bg-stone-100 font-Roboto ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "bg-orange-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "text-gray-600 body-font bg-no-repeat min-h-screen bg-contain bg-bottom bg-[url('/spinning2.png')]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Navbar2, {}, void 0, !1, {
      fileName: "app/routes/spinning.index_old.tsx",
      lineNumber: 71,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "h-full  mt-24 items-center flex flex-col gap-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        import_react12.Form,
        {
          method: "post",
          className: "rounded-2xl bg-white bg-opacity-25  p-6 md:w-1/2 lg:w1/4 w-10/12",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "matricula", className: " font-semibold mb-9 ", children: "N\xFAmero de Matricula" }, void 0, !1, {
              fileName: "app/routes/spinning.index_old.tsx",
              lineNumber: 76,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative  my-4 flex w-full flex-wrap items-stretch mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "z-10 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded-xl text-base items-center justify-center w-8 pl-3 py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_im.ImEnter, {}, void 0, !1, {
                fileName: "app/routes/spinning.index_old.tsx",
                lineNumber: 81,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/spinning.index_old.tsx",
                lineNumber: 80,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                "input",
                {
                  type: "number",
                  name: "matricula",
                  required: !0,
                  autoFocus: !0,
                  placeholder: "Pegue seu n\xFAmero na recep\xE7\xE3o",
                  className: "px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white  rounded-xl text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/spinning.index_old.tsx",
                  lineNumber: 83,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/spinning.index_old.tsx",
              lineNumber: 79,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "button",
              {
                disabled: transition.state === "submitting" || transition.state === "loading",
                type: "submit",
                name: "Entrar",
                className: "" + transition.state == "loading" ? "rounded-xl mt-2  bg-blue-600 px-3 py-2 text-white font-semibold" : "rounded-xl mt-2  bg-green-400 px-3 py-2  font-semibold hover:bg-orange-400 hover:-translate-y-1",
                children: transition.state === "submitting" ? "Localizando..." : transition.state === "loading" ? "Carregando Aulas" : "Entrar"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/spinning.index_old.tsx",
                lineNumber: 94,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/spinning.index_old.tsx",
              lineNumber: 93,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/spinning.index_old.tsx",
          lineNumber: 73,
          columnNumber: 13
        },
        this
      ),
      (data == null ? void 0 : data.message) && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "  text-center text-md text-white font-medium px-4 py-3 bg-red-600 rounded-lg", children: data.message }, void 0, !1, {
        fileName: "app/routes/spinning.index_old.tsx",
        lineNumber: 115,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/spinning.index_old.tsx",
      lineNumber: 72,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/spinning.index_old.tsx",
    lineNumber: 70,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/spinning.index_old.tsx",
    lineNumber: 69,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/spinning.index_old.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}

// app/routes/aluno.baktreino.tsx
var aluno_baktreino_exports = {};
__export(aluno_baktreino_exports, {
  action: () => action4,
  default: () => Treino2,
  loader: () => loader5
});
var import_node8 = require("@remix-run/node"), import_node9 = require("@remix-run/node"), import_react13 = require("@remix-run/react");
var import_date_fns2 = require("date-fns"), import_format = __toESM(require("date-fns/format")), import_pt_BR = __toESM(require("date-fns/locale/pt-BR")), import_react14 = require("react"), import_lodash2 = __toESM(require("lodash")), import_fa3 = require("react-icons/fa"), import_fi = require("react-icons/fi"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), loader5 = async ({ request, params }) => {
  let aluno = await getAluno(Number(params.treino)), treinosGrupo = await getTreinos((0, import_date_fns2.getWeek)(new Date())), historicoTreinos = await getHistorico(Number(params.treino));
  return (0, import_node9.json)({ aluno, treinosGrupo, historicoTreinos });
}, action4 = async ({ request }) => {
  let form = await request.formData(), values = Object.fromEntries(form);
  return await updateHistorico(values), (0, import_node8.redirect)(`/aluno/${values.aluno}`);
};
function Treino2() {
  let { aluno, treinosGrupo, historicoTreinos } = (0, import_react13.useLoaderData)(), [grupo, setGrupo] = (0, import_react14.useState)(), [tipoTreinoGrupo, SetTipoTreinoGRupo] = (0, import_react14.useState)(
    treinosGrupo.filter((el) => el.grupo.includes("2X"))
  ), [treino, setTreino] = (0, import_react14.useState)(), [checked, setChecked] = (0, import_react14.useState)([]), transition = (0, import_react13.useTransition)(), ultimosTreinos = import_lodash2.default.takeRight(historicoTreinos == null ? void 0 : historicoTreinos.treinos, 6), handleGrupo = (event) => {
    setGrupo(event.target.value);
    for (var inputs = document.querySelectorAll("[id=done]"), i = 0; i < inputs.length; i++)
      inputs[i].checked = !1;
  }, handleTipoTreino = (event) => {
    switch (event.target.value) {
      case "2X":
        SetTipoTreinoGRupo(
          treinosGrupo.filter((el) => el.grupo.includes("2X"))
        );
        break;
      case "3X":
        SetTipoTreinoGRupo(
          treinosGrupo.filter((el) => el.grupo.includes("3X"))
        );
        break;
      case "4X":
        SetTipoTreinoGRupo(
          treinosGrupo.filter((el) => el.grupo.includes("4X"))
        );
        break;
      case "5X":
        SetTipoTreinoGRupo(
          treinosGrupo.filter((el) => el.grupo.includes("5X"))
        );
        break;
      case "6X":
        SetTipoTreinoGRupo(
          treinosGrupo.filter((el) => el.grupo.includes("6X"))
        );
        break;
      case "grupo":
        SetTipoTreinoGRupo(
          treinosGrupo.filter((el) => !el.grupo.includes("TREINO"))
        );
        break;
    }
  }, handleCheck = (event) => {
    var updatedList = [...checked];
    event.target.checked ? updatedList = [...checked, event.target.value] : updatedList.splice(checked.indexOf(event.target.value), 1), setChecked(updatedList);
  };
  var isChecked = (item) => checked.includes(item) ? "bg-green-300 mb-2  font-light  p-2 rounded-lg  shadow-md" : "bg-stone-100 mb-2  font-light  p-2 rounded-lg  ", isCheckedTitle = (item) => checked.includes(item) ? "text-decoration-line: line-through" : "text font-medium text-green-600";
  (0, import_react14.useEffect)(() => {
    setTreino(
      import_lodash2.default.filter(tipoTreinoGrupo, ["grupo", grupo])
    );
  }, [grupo, tipoTreinoGrupo]);
  let textInput = (0, import_react14.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react13.Outlet, {}, void 0, !1, {
      fileName: "app/routes/aluno.baktreino.tsx",
      lineNumber: 152,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: " px-2 mx-auto ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "img",
          {
            src: aluno.photo,
            className: "rounded-full shadow-lg w-24 h-24 m-4 mx-auto",
            alt: "Avatar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/aluno.baktreino.tsx",
            lineNumber: 156,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h5", { className: "text-xl  leading-tight mb-2", children: [
          aluno.firstName,
          " ",
          aluno.lastName,
          " -",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "font-mono text-gray-400", children: [
            " ",
            aluno.idMember
          ] }, void 0, !0, {
            fileName: "app/routes/aluno.baktreino.tsx",
            lineNumber: 163,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno.baktreino.tsx",
          lineNumber: 161,
          columnNumber: 11
        }, this),
        ultimosTreinos && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { className: "  text-blue-600 rounded-md  text-md mt-4", children: "\xDALTIMOS TREINOS" }, void 0, !1, {
            fileName: "app/routes/aluno.baktreino.tsx",
            lineNumber: 167,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "text-gray-500 grid  gap-2 grid-cols-3", children: ultimosTreinos.map((u, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-1 mb-4  py-2 px-2 rounded-md my-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "font-semibold text-blue-600", children: u.treino }, void 0, !1, {
              fileName: "app/routes/aluno.baktreino.tsx",
              lineNumber: 174,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: (0, import_format.default)(new Date(u.data), "EEEEEE - dd/MM", {
              locale: import_pt_BR.default
            }) }, void 0, !1, {
              fileName: "app/routes/aluno.baktreino.tsx",
              lineNumber: 177,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno.baktreino.tsx",
            lineNumber: 173,
            columnNumber: 21
          }, this) }, index, !1, {
            fileName: "app/routes/aluno.baktreino.tsx",
            lineNumber: 172,
            columnNumber: 19
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno.baktreino.tsx",
            lineNumber: 170,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno.baktreino.tsx",
          lineNumber: 166,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno.baktreino.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "w-full max-w-lg mb-2 px-6 py-3 mx-auto border bg-white rounded-lg  ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { className: "font-semibold mb-3", children: "Treinos por Semana" }, void 0, !1, {
          fileName: "app/routes/aluno.baktreino.tsx",
          lineNumber: 191,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex justify-between text-sm text-center item-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "input",
              {
                name: "semana",
                type: "radio",
                id: "2",
                value: "2X",
                onChange: handleTipoTreino,
                className: "hidden peer"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno.baktreino.tsx",
                lineNumber: 194,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "label",
              {
                htmlFor: "2",
                className: "inline-block cursor-pointer w-12 h-10 p-3  font-medium  text-white rounded-full bg-stone-400 peer-hover:bg-gray-300 peer-hover:text-white peer-checked:bg-orange-600 peer-checked:text-white",
                children: "2"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno.baktreino.tsx",
                lineNumber: 202,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno.baktreino.tsx",
            lineNumber: 193,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "input",
              {
                name: "semana",
                type: "radio",
                id: "3",
                value: "3X",
                onChange: handleTipoTreino,
                className: "hidden peer"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno.baktreino.tsx",
                lineNumber: 209,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "label",
              {
                htmlFor: "3",
                className: "inline-block cursor-pointer w-12 h-10 p-3 font-medium text-white rounded-full bg-stone-400 peer-hover:bg-gray-300 peer-hover:text-white peer-checked:bg-orange-600 peer-checked:text-white",
                children: "3"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno.baktreino.tsx",
                lineNumber: 217,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno.baktreino.tsx",
            lineNumber: 208,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "input",
              {
                name: "semana",
                type: "radio",
                id: "4",
                value: "4X",
                onChange: handleTipoTreino,
                className: "hidden peer"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno.baktreino.tsx",
                lineNumber: 224,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "label",
              {
                htmlFor: "4",
                className: "inline-block cursor-pointer w-12 h-10 p-3 font-medium text-white rounded-full bg-stone-400 peer-hover:bg-gray-300 peer-hover:text-white peer-checked:bg-orange-600 peer-checked:text-white",
                children: "4"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno.baktreino.tsx",
                lineNumber: 232,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno.baktreino.tsx",
            lineNumber: 223,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "input",
              {
                name: "semana",
                type: "radio",
                id: "5",
                value: "5X",
                onChange: handleTipoTreino,
                className: "hidden peer"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno.baktreino.tsx",
                lineNumber: 239,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "label",
              {
                htmlFor: "5",
                className: "inline-block cursor-pointer w-12 h-10 p-3 font-medium text-white rounded-full bg-stone-400 peer-hover:bg-gray-300 peer-hover:text-white peer-checked:bg-orange-600 peer-checked:text-white",
                children: "5"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno.baktreino.tsx",
                lineNumber: 247,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno.baktreino.tsx",
            lineNumber: 238,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "input",
              {
                name: "semana",
                type: "radio",
                id: "6",
                value: "6X",
                onChange: handleTipoTreino,
                className: "hidden peer"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno.baktreino.tsx",
                lineNumber: 254,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "label",
              {
                htmlFor: "6",
                className: "inline-block cursor-pointer w-12 h-10 p-3 font-medium text-white rounded-full bg-stone-400 peer-hover:bg-gray-300 peer-hover:text-white peer-checked:bg-orange-600 peer-checked:text-white",
                children: "6"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno.baktreino.tsx",
                lineNumber: 262,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno.baktreino.tsx",
            lineNumber: 253,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "input",
              {
                name: "semana",
                type: "radio",
                id: "grupo",
                value: "grupo",
                className: "hidden peer",
                onChange: handleTipoTreino
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno.baktreino.tsx",
                lineNumber: 269,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "label",
              {
                htmlFor: "grupo",
                className: "inline-block cursor-pointer w-16 h-10 p-3 font-medium text-white rounded-full bg-gray-400 peer-hover:bg-gray-300 peer-hover:text-white peer-checked:bg-orange-600 peer-checked:text-white",
                children: "Grupo"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno.baktreino.tsx",
                lineNumber: 277,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno.baktreino.tsx",
            lineNumber: 268,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno.baktreino.tsx",
          lineNumber: 192,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno.baktreino.tsx",
        lineNumber: 190,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: " max-w-lg flex mx-auto ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "select",
        {
          className: "form-select block  justify-center w-full px-3 py-1.5 font-light text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none",
          "aria-label": "Selecione o treino",
          defaultValue: "Selecione o Treino",
          value: grupo,
          onChange: handleGrupo,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("option", { children: "Selecione o Treino" }, void 0, !1, {
              fileName: "app/routes/aluno.baktreino.tsx",
              lineNumber: 328,
              columnNumber: 13
            }, this),
            tipoTreinoGrupo == null ? void 0 : tipoTreinoGrupo.map((grupo2) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("option", { value: grupo2.grupo, children: grupo2.grupo }, grupo2.grupo, !1, {
              fileName: "app/routes/aluno.baktreino.tsx",
              lineNumber: 330,
              columnNumber: 15
            }, this))
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/aluno.baktreino.tsx",
          lineNumber: 321,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/aluno.baktreino.tsx",
        lineNumber: 320,
        columnNumber: 9
      }, this),
      grupo && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react13.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { readOnly: !0, hidden: !0, type: "text", name: "treino", value: grupo }, void 0, !1, {
          fileName: "app/routes/aluno.baktreino.tsx",
          lineNumber: 339,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "input",
          {
            hidden: !0,
            type: "number",
            name: "aluno",
            defaultValue: aluno.idMember
          },
          void 0,
          !1,
          {
            fileName: "app/routes/aluno.baktreino.tsx",
            lineNumber: 340,
            columnNumber: 13
          },
          this
        ),
        grupo !== "Selecione o Treino" && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: " block justify-center mx-auto max-w-xl ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-row  justify-evenly  font-bold text-orange-500 items-center m-2 text-xl", children: [
          grupo,
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { className: "bg-blue-500   inline-flex gap-3 items-center px-3 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-md  hover:shadow-lg hover:bg-green-800", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_fa3.FaCheck, {}, void 0, !1, {
              fileName: "app/routes/aluno.baktreino.tsx",
              lineNumber: 352,
              columnNumber: 21
            }, this),
            transition.state === "submitting" ? "Atualizando..." : "Feito"
          ] }, void 0, !0, {
            fileName: "app/routes/aluno.baktreino.tsx",
            lineNumber: 351,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno.baktreino.tsx",
          lineNumber: 349,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno.baktreino.tsx",
          lineNumber: 348,
          columnNumber: 15
        }, this),
        treino == null ? void 0 : treino.map((e, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "div",
          {
            className: " grid  gap-2 sm:grid-cols-2 lg:grid-cols-3  ",
            children: e.exercicios.map((exe, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: isChecked(exe.nome), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex mb-2 flex-row justify-between ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: isCheckedTitle(exe.nome), children: exe.nome }, void 0, !1, {
                  fileName: "app/routes/aluno.baktreino.tsx",
                  lineNumber: 371,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                  "input",
                  {
                    className: " w-6 h-6 accent-green-500 mr-4",
                    value: exe.nome,
                    type: "checkbox",
                    onChange: handleCheck,
                    id: "done",
                    name: "done",
                    ref: textInput
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno.baktreino.tsx",
                    lineNumber: 375,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/aluno.baktreino.tsx",
                lineNumber: 370,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex mb-2 shrink-0 items-center content-around  ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_fa3.FaSyncAlt, { className: "shrink-0 mr-3 " }, void 0, !1, {
                  fileName: "app/routes/aluno.baktreino.tsx",
                  lineNumber: 386,
                  columnNumber: 25
                }, this),
                exe.Repeticoes
              ] }, void 0, !0, {
                fileName: "app/routes/aluno.baktreino.tsx",
                lineNumber: 385,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex  mb-2  items-center content-around lowercase", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_fa3.FaDumbbell, { className: " shrink-0 mr-3" }, void 0, !1, {
                  fileName: "app/routes/aluno.baktreino.tsx",
                  lineNumber: 390,
                  columnNumber: 25
                }, this),
                exe.carga
              ] }, void 0, !0, {
                fileName: "app/routes/aluno.baktreino.tsx",
                lineNumber: 389,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex mb-2  shrink-0 items-center content-around lowercase ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_fa3.FaExclamationCircle, { className: "shrink-0 mr-3" }, void 0, !1, {
                  fileName: "app/routes/aluno.baktreino.tsx",
                  lineNumber: 395,
                  columnNumber: 25
                }, this),
                exe.obs
              ] }, void 0, !0, {
                fileName: "app/routes/aluno.baktreino.tsx",
                lineNumber: 394,
                columnNumber: 23
              }, this),
              exe.video !== "" && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: " flex justify-end  text-l mr-4 text-white ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                import_react13.Link,
                {
                  className: "bg-orange-300 rounded-lg px-6 p-2 ",
                  to: `${exe.video}`,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_fi.FiVideo, {}, void 0, !1, {
                    fileName: "app/routes/aluno.baktreino.tsx",
                    lineNumber: 403,
                    columnNumber: 29
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/aluno.baktreino.tsx",
                  lineNumber: 400,
                  columnNumber: 27
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/aluno.baktreino.tsx",
                lineNumber: 399,
                columnNumber: 25
              }, this)
            ] }, index2, !0, {
              fileName: "app/routes/aluno.baktreino.tsx",
              lineNumber: 369,
              columnNumber: 21
            }, this))
          },
          index,
          !1,
          {
            fileName: "app/routes/aluno.baktreino.tsx",
            lineNumber: 365,
            columnNumber: 17
          },
          this
        ))
      ] }, void 0, !0, {
        fileName: "app/routes/aluno.baktreino.tsx",
        lineNumber: 338,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno.baktreino.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno.baktreino.tsx",
    lineNumber: 151,
    columnNumber: 5
  }, this);
}

// app/routes/aluno.index_bak.tsx
var aluno_index_bak_exports = {};
__export(aluno_index_bak_exports, {
  CatchBoundary: () => CatchBoundary2,
  action: () => action5,
  default: () => Index4
});
var import_node10 = require("@remix-run/node"), import_node11 = require("@remix-run/node"), import_react15 = require("@remix-run/react");
var import_react_hot_toast2 = __toESM(require("react-hot-toast")), import_react16 = require("react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), action5 = async ({ request }) => {
  let matricula = (await request.formData()).get("matricula"), aluno = await getAluno(matricula);
  if (!aluno.idMember)
    throw (0, import_node10.json)(
      { message: "Aluno n\xE3o Encontrado" },
      { status: 401, statusText: Math.floor(Math.random() * 15).toString() }
    );
  if (aluno.membershipStatus === "Inactive")
    throw (0, import_node10.json)(
      { message: "Aluno Inativo" },
      { status: 401, statusText: Math.floor(Math.random() * 15).toString() }
    );
  return (0, import_node11.redirect)(`/aluno/${aluno.idMember}`);
};
function Index4() {
  let transition = (0, import_react15.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "h-screen w-full bg-gradient-to-b from-[#e6b980] to-[#eacda3] font-Roboto ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "h-full mt-24 items-center flex flex-col gap-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    import_react15.Form,
    {
      method: "post",
      className: "rounded-2xl bg-white bg-opacity-30 p-6 md:w-1/2 w-10/12",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { htmlFor: "matricula", className: "text-stone-800 font-semibold ", children: "N\xFAmero de Matricula" }, void 0, !1, {
          fileName: "app/routes/aluno.index_bak.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "input",
          {
            className: "w-full p-2 rounded-xl my-2 placeholder-slate-300 text-slate-600",
            type: "number",
            name: "matricula",
            placeholder: "Pegue seu n\xFAmero na recep\xE7\xE3o...",
            required: !0,
            autoFocus: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/aluno.index_bak.tsx",
            lineNumber: 46,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "button",
          {
            disabled: transition.state === "submitting" || transition.state === "loading",
            type: "submit",
            name: "Entrar",
            className: "" + transition.state == "loading" ? "rounded-xl mt-2  bg-blue-600 px-3 py-2 text-white font-semibold" : "rounded-xl mt-2  bg-green-600 px-3 py-2 text-white font-semibold hover:bg-orange-400 hover:-translate-y-1",
            children: transition.state === "submitting" ? "Localizando..." : transition.state === "loading" ? "Carregando Treino" : "Entrar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/aluno.index_bak.tsx",
            lineNumber: 55,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/aluno.index_bak.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/aluno.index_bak.tsx",
      lineNumber: 40,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/aluno.index_bak.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/aluno.index_bak.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
function CatchBoundary2() {
  var _a;
  let transition = (0, import_react15.useTransition)(), caughtResponse = (0, import_react15.useCatch)(), message = (_a = caughtResponse.data) == null ? void 0 : _a.message, random = caughtResponse.statusText;
  return (0, import_react16.useEffect)(() => {
    (() => import_react_hot_toast2.default.error(/* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: message }, void 0, !1, {
      fileName: "app/routes/aluno.index_bak.tsx",
      lineNumber: 87,
      columnNumber: 38
    }, this)))();
  }, [random, message]), /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "h-screen w-full bg-stone-100 font-Roboto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      import_react_hot_toast2.Toaster,
      {
        toastOptions: {
          className: "",
          style: {
            padding: "12px",
            color: "#ffffff",
            background: "#f78e34"
          }
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/aluno.index_bak.tsx",
        lineNumber: 94,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Navbar, {}, void 0, !1, {
      fileName: "app/routes/aluno.index_bak.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "h-full mt-24 items-center flex flex-col gap-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react15.Form, { method: "post", className: "rounded-2xl bg-stone-200 p-6 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "label",
        {
          htmlFor: "matricula",
          className: "text-stone-600 font-semibold ",
          children: "N\xFAmero de Matricula"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno.index_bak.tsx",
          lineNumber: 108,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "input",
        {
          className: "w-full p-2 rounded-xl my-2",
          type: "number",
          name: "matricula",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno.index_bak.tsx",
          lineNumber: 113,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "button",
        {
          disabled: transition.state === "submitting" || transition.state === "loading",
          type: "submit",
          name: "Entrar",
          className: "" + transition.state == "loading" ? "rounded-xl mt-2  bg-blue-600 px-3 py-2 text-white font-semibold" : "rounded-xl mt-2  bg-green-600 px-3 py-2 text-white font-semibold hover:bg-orange-400 hover:-translate-y-1",
          children: transition.state === "submitting" ? "Localizando..." : transition.state === "loading" ? "Carregando Treino" : "Entrar"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno.index_bak.tsx",
          lineNumber: 121,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/aluno.index_bak.tsx",
        lineNumber: 120,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno.index_bak.tsx",
      lineNumber: 107,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno.index_bak.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno.index_bak.tsx",
    lineNumber: 93,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/aluno.index_bak.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

// app/routes/cadaulas._index.tsx
var cadaulas_index_exports = {};
__export(cadaulas_index_exports, {
  default: () => Cadaulas,
  loader: () => loader6
});
var import_node12 = require("@remix-run/node"), import_react19 = require("@remix-run/react");

// app/components/AulasCadastro.tsx
var import_fa4 = require("react-icons/fa"), import_react17 = require("react"), import_react18 = require("@remix-run/react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function AulasCadastro(props) {
  let { aulas } = props, [procuraAula, setProcuraAula] = (0, import_react17.useState)(""), filtrada = aulas.filter(
    (aulas2) => aulas2.turma.toLowerCase().includes(procuraAula.toLowerCase())
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex justify-center flex-wrap mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "p-2 w-full md:w-3/4  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "overflow-x-auto relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "p-2 w-full ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mt-6 mb-2  text-blue-500 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "relative  ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_fa4.FaSearch, {}, void 0, !1, {
        fileName: "app/components/AulasCadastro.tsx",
        lineNumber: 22,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/AulasCadastro.tsx",
        lineNumber: 21,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        "input",
        {
          type: "search",
          id: "search",
          value: procuraAula,
          onChange: (e) => setProcuraAula(e.target.value),
          placeholder: "Procurar Aulas",
          className: "block p-1  pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  "
        },
        void 0,
        !1,
        {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 25,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/AulasCadastro.tsx",
      lineNumber: 20,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/AulasCadastro.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "overflow-x-auto relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("table", { className: "w-full  text-sm text-left text-gray-500 dark:text-gray-400", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("thead", { className: "text-xs  text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("tr", { className: "rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("th", { scope: "col", className: "py-3 px-6 ", children: "Aulas" }, void 0, !1, {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 39,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("th", { scope: "col", className: "py-3 px-6", children: "Inicio" }, void 0, !1, {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 42,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("th", { scope: "col", className: "py-3 px-6", children: "Final" }, void 0, !1, {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 45,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("th", { scope: "col", className: "py-3 ", children: "Dias" }, void 0, !1, {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 48,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("th", { className: "py-3 text-center ", children: "A\xE7\xF5es" }, void 0, !1, {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 51,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/AulasCadastro.tsx",
        lineNumber: 38,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/AulasCadastro.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("tbody", { children: filtrada.map((aula2) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("tr", { className: "bg-white dark:bg-gray-800", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          "th",
          {
            scope: "row",
            className: "py-4 px-6 flex gap-x-2 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                "img",
                {
                  className: "avatar h-6 w-6 md:h-8 md:w-8 rounded-full ",
                  src: aula2.icon,
                  alt: aula2.turma
                },
                void 0,
                !1,
                {
                  fileName: "app/components/AulasCadastro.tsx",
                  lineNumber: 61,
                  columnNumber: 25
                },
                this
              ),
              aula2.turma
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/AulasCadastro.tsx",
            lineNumber: 57,
            columnNumber: 23
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("td", { className: "py-4 px-6", children: aula2.start }, void 0, !1, {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 68,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("td", { className: "py-4 px-6", children: aula2.finish }, void 0, !1, {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 69,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("td", { className: "py-4 font-mono text-stone-400 ", children: aula2.days.map((m) => m == 1 ? "SEG " : m == 2 ? "TER " : m == 3 ? "QUA  " : m == 4 ? "QUI " : m == 5 ? "SEX " : m == 6 ? "SAB " : "DOM") }, void 0, !1, {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 71,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("td", { className: "py-3 text-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_react18.Link,
          {
            to: `/cadaulas/${aula2.id}`,
            className: "text-blue-600 text-lg ",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_fa4.FaEdit, {}, void 0, !1, {
              fileName: "app/components/AulasCadastro.tsx",
              lineNumber: 100,
              columnNumber: 27
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/AulasCadastro.tsx",
            lineNumber: 96,
            columnNumber: 25
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 95,
          columnNumber: 23
        }, this)
      ] }, aula2.id, !0, {
        fileName: "app/components/AulasCadastro.tsx",
        lineNumber: 56,
        columnNumber: 21
      }, this)) }, void 0, !1, {
        fileName: "app/components/AulasCadastro.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/AulasCadastro.tsx",
      lineNumber: 36,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/AulasCadastro.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AulasCadastro.tsx",
    lineNumber: 18,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/AulasCadastro.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/AulasCadastro.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/AulasCadastro.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/utils/aulas.server.ts
var getAulas = async () => prisma.classes.findMany({
  orderBy: {
    start: "asc"
  }
}), getSpinning = async () => prisma.classes.findMany({
  where: {
    turma: "Spinning"
  },
  orderBy: {
    start: "asc"
  }
}), getAgendamentos = async () => {
  var nova = new Date().toLocaleString("en-ZA", {
    timeZone: "America/Sao_Paulo"
  }).slice(0, 10);
  return prisma.reservas.findMany({
    where: {
      data: new Date(nova)
    }
  });
}, createAgendamento = async (agenda) => {
  var nowDate = new Date(), date = nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate();
  return await prisma.reservas.upsert({
    where: { identificador: agenda.identificador },
    update: {
      alunos: {
        push: {
          nome: agenda.nome,
          idMember: +agenda.idMember,
          photo: agenda.photo
        }
      }
    },
    create: {
      alunos: {
        nome: agenda.nome,
        idMember: +agenda.idMember,
        photo: agenda.photo
      },
      aula: agenda.aula,
      Hora: agenda.hora,
      identificador: agenda.identificador,
      data: new Date(date)
    }
  });
}, deleteAlulaAgendada = async (id, idMember) => prisma.reservas.update({
  where: {
    id
  },
  data: {
    alunos: {
      deleteMany: {
        where: {
          idMember: +idMember
        }
      }
    }
  }
}), getAulasNome = async () => prisma.classes.findMany({
  orderBy: {
    turma: "asc"
  }
}), getAulaId = async (id) => prisma.classes.findUnique({
  where: {
    id
  }
}), createAula = async (values, dias) => {
  var icone = values.classe + ".png";
  return prisma.classes.create({
    data: {
      start: values.inicio,
      finish: values.final,
      classe: values.classe,
      turma: values.turma,
      icon: icone,
      days: dias
    }
  });
}, updateAula = async (values, dias) => prisma.classes.update({
  where: {
    id: values.id
  },
  data: {
    start: values.inicio,
    finish: values.final,
    classe: values.classe,
    turma: values.turma,
    icon: values.icon,
    days: dias
  }
}), deleteAula = async (id) => prisma.classes.delete({
  where: {
    id
  }
});

// app/routes/cadaulas._index.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), loader6 = async ({ request }) => {
  let TodasAulas = await getAulasNome();
  return (0, import_node12.json)({ TodasAulas });
};
function Cadaulas() {
  let { TodasAulas } = (0, import_react19.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: " bg-stone-100 font-Roboto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mt-2 text-right mr-8 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      import_react19.NavLink,
      {
        className: " justify-center w-60 px-4 py-2  text-white bg-blue-600 hover:bg-blue-800  rounded-lg text-sm   ",
        to: "/cadaulas/nova",
        children: "Nova"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/cadaulas._index.tsx",
        lineNumber: 18,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/cadaulas._index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(AulasCadastro, { aulas: TodasAulas }, void 0, !1, {
      fileName: "app/routes/cadaulas._index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cadaulas._index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/spinning._index.tsx
var spinning_index_exports = {};
__export(spinning_index_exports, {
  action: () => action6,
  default: () => Spinning,
  loader: () => loader7
});
var import_node13 = require("@remix-run/node"), import_node14 = require("@remix-run/node"), import_react20 = require("@remix-run/react");
var import_ai = require("react-icons/ai"), import_lodash3 = __toESM(require("lodash")), import_moment = __toESM(require("moment"));
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), loader7 = async ({ request, params }) => {
  var _a, _b;
  let session = await getSession(request.headers.get("Cookie")), plano = (_a = session.get("aluno")) == null ? void 0 : _a.plano;
  if (console.log(session.get("aluno")), console.log((_b = session.get("aluno")) == null ? void 0 : _b.id), !session.has("aluno"))
    return session.set("aluno", {
      red: "/spinning"
    }), (0, import_node13.redirect)("/login", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  if ((plano ? plano.filter(
    (s) => s.includes("FITNESS") || s.includes("SPINNING") || s.includes("TOTAL")
  ).length : 0) === 0) {
    let session2 = await getSession(request.headers.get("Cookie"));
    return session2.set("aluno", {
      motivo: "Spinning n\xE3o est\xE1 incluso em seu plano",
      url: "/spinning"
    }), (0, import_node13.redirect)("/login", {
      headers: {
        "Set-Cookie": await commitSession(session2)
      }
    });
  }
  let aluno = (await getAluno(
    session.get("aluno").id ? session.get("aluno").id : ""
  ))[0], aulas = await getSpinning(), agendamentos = await getAgendamentos();
  return (0, import_node14.json)({ aluno, aulas, agendamentos });
}, action6 = async ({ request }) => {
  let form = await request.formData(), values = Object.fromEntries(form), agendamentos = await getAgendamentos(), aula_agendada = import_lodash3.default.filter(agendamentos, ["Hora", values.hora]), alunos = import_lodash3.default.flatten(aula_agendada.map((dt) => dt.alunos)), existeaAgenda = import_lodash3.default.filter(alunos, ["idMember", +values.idMember]).length, _action = form.get("_action");
  if (_action === "delete")
    return await deleteAlulaAgendada(values.id, values.idMember), null;
  if (_action === "save")
    return existeaAgenda === 0 ? await createAgendamento(values) : {
      message: aula_agendada.map((h) => h.aula).toString() + " Hor\xE1rio: " + aula_agendada.map((h) => h.Hora).toString() + " j\xE1 agendada para aluno: " + values.nome
    };
};
function Spinning() {
  let { aluno, aulas, agendamentos } = (0, import_react20.useLoaderData)(), alunoAgendado = (0, import_react20.useActionData)(), id = aluno.idMember, now = new Date(), agora = (0, import_moment.default)(), hourFilter = aulas.filter(
    (classes) => classes.days.includes(now.getDay())
  ), agendaAluno = agendamentos.filter(
    (e) => e.alunos.some((aluno2) => aluno2.idMember === id)
  ), aula730 = import_lodash3.default.filter(agendamentos, ["Hora", "07:30"]), alunos730 = import_lodash3.default.flatten(aula730.map((dt) => dt.alunos)).length, aula19 = import_lodash3.default.filter(agendamentos, ["Hora", "19:00"]), alunos19 = import_lodash3.default.flatten(aula19.map((dt) => dt.alunos)).length;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "px-2 mx-auto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        "img",
        {
          src: aluno.photo !== null ? aluno.photo : "/user.png",
          className: "rounded-full shadow-lg w-24 h-24 m-4 mx-auto",
          alt: "Avatar"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/spinning._index.tsx",
          lineNumber: 132,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h5", { className: "text-xl  leading-tight mb-2", children: [
        aluno.firstName,
        " ",
        aluno.lastName,
        " -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "font-mono text-gray-400", children: [
          " ",
          aluno.idMember
        ] }, void 0, !0, {
          fileName: "app/routes/spinning._index.tsx",
          lineNumber: 139,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/spinning._index.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/spinning._index.tsx",
      lineNumber: 131,
      columnNumber: 9
    }, this),
    hourFilter.length > 0 && aluno.idMember !== 4 && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "w-full container mx-auto px-8 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex   mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h5", { className: "text-md   font-medium leading-none text-slate-500 ", children: "RESERVAR AULAS" }, void 0, !1, {
        fileName: "app/routes/spinning._index.tsx",
        lineNumber: 146,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/spinning._index.tsx",
        lineNumber: 145,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { className: "divide-y divide-gray-200 ", children: [
        hourFilter.map((aula2) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { className: "py-3 sm:py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react20.Form, { method: "post", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "input",
            {
              name: "nome",
              hidden: !0,
              readOnly: !0,
              value: aluno.firstName + " " + aluno.lastName
            },
            void 0,
            !1,
            {
              fileName: "app/routes/spinning._index.tsx",
              lineNumber: 155,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "input",
            {
              name: "idMember",
              hidden: !0,
              readOnly: !0,
              value: aluno.idMember
            },
            void 0,
            !1,
            {
              fileName: "app/routes/spinning._index.tsx",
              lineNumber: 160,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "input",
            {
              name: "photo",
              hidden: !0,
              readOnly: !0,
              value: aluno.photo
            },
            void 0,
            !1,
            {
              fileName: "app/routes/spinning._index.tsx",
              lineNumber: 165,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex-shrink-0  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              "button",
              {
                disabled: aula2.start === "07:30" ? import_moment.default.duration(
                  (0, import_moment.default)(aula2.start, "HH:mm:ss").diff(agora)
                ).asHours() > 0.5 || import_moment.default.duration(
                  (0, import_moment.default)(aula2.start, "HH:mm:ss").diff(agora)
                ).asHours() < 0 || +alunos730 > 17 : import_moment.default.duration(
                  (0, import_moment.default)(aula2.start, "HH:mm:ss").diff(agora)
                ).asHours() > 0.5 || import_moment.default.duration(
                  (0, import_moment.default)(aula2.start, "HH:mm:ss").diff(agora)
                ).asHours() < 0 || +alunos19 > 17,
                className: "bg-green-500 rounded-full px-2 pt-2.5 pb-2  disabled:bg-slate-400 disabled:cursor-not-allowed disabled:opacity-40 text-white active:bg-orange-600 font-bold uppercase text-sm  py-1  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                type: "submit",
                name: "_action",
                value: "save",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_ai.AiFillSchedule, { className: "text-2xl" }, void 0, !1, {
                  fileName: "app/routes/spinning._index.tsx",
                  lineNumber: 207,
                  columnNumber: 29
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/spinning._index.tsx",
                lineNumber: 172,
                columnNumber: 27
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/spinning._index.tsx",
              lineNumber: 171,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex-1 min-w-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: " font-medium text-gray-900 truncate", children: [
                aula2.turma,
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "aula",
                    hidden: !0,
                    readOnly: !0,
                    value: aula2.turma
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/spinning._index.tsx",
                    lineNumber: 214,
                    columnNumber: 29
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "identificador",
                    hidden: !0,
                    readOnly: !0,
                    value: aula2.turma + "|" + aula2.start + "|" + (new Date().getMonth() + 1) + "/" + new Date().getDate()
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/spinning._index.tsx",
                    lineNumber: 221,
                    columnNumber: 29
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/spinning._index.tsx",
                lineNumber: 211,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "text-sm  text-blue-500 truncate ", children: [
                aula2.start,
                " - ",
                aula2.finish,
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "hora",
                    hidden: !0,
                    readOnly: !0,
                    value: aula2.start
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/spinning._index.tsx",
                    lineNumber: 239,
                    columnNumber: 29
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/spinning._index.tsx",
                lineNumber: 237,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/spinning._index.tsx",
              lineNumber: 210,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "items-center text-base font-semibold text-gray-900  w-1/2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "text-center text-blue-400 font-medium text-sm", children: "RESERVADO" }, void 0, !1, {
                fileName: "app/routes/spinning._index.tsx",
                lineNumber: 249,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "w-full bg-gray-200  rounded-full ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                "div",
                {
                  className: "bg-orange-300 rounded-full text-xs font-medium  text-center p-1 leading-none  ",
                  style: aula2.start === "07:30" ? {
                    width: Math.round(alunos730 / 17 * 100) + "%"
                  } : {
                    width: Math.round(alunos19 / 17 * 100) + "%"
                  },
                  children: aula2.start === "07:30" ? Math.round(alunos730 / 17 * 100) + "% " : Math.round(alunos19 / 17 * 100) + "% "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/spinning._index.tsx",
                  lineNumber: 253,
                  columnNumber: 29
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/spinning._index.tsx",
                lineNumber: 252,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/spinning._index.tsx",
              lineNumber: 248,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/spinning._index.tsx",
            lineNumber: 170,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/spinning._index.tsx",
          lineNumber: 154,
          columnNumber: 21
        }, this) }, aula2.id, !1, {
          fileName: "app/routes/spinning._index.tsx",
          lineNumber: 153,
          columnNumber: 19
        }, this)),
        (alunoAgendado == null ? void 0 : alunoAgendado.message) && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "  text-center text-md text-white font-medium px-4 py-3 bg-blue-400 rounded-lg", children: alunoAgendado.message }, void 0, !1, {
          fileName: "app/routes/spinning._index.tsx",
          lineNumber: 279,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/spinning._index.tsx",
        lineNumber: 151,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/spinning._index.tsx",
        lineNumber: 150,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/spinning._index.tsx",
      lineNumber: 144,
      columnNumber: 11
    }, this),
    agendaAluno.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "divide-y flex-row divide-gray-200 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { className: "text-center font-semibold p-2", children: "Aulas Reservada" }, void 0, !1, {
        fileName: "app/routes/spinning._index.tsx",
        lineNumber: 290,
        columnNumber: 15
      }, this),
      agendaAluno.map((aulas2) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        import_react20.Form,
        {
          method: "post",
          className: " text-center mb-2 flex h-10 items-center  justify-between rounded-[26px] shadow  bg-slate-200 py-0 px-[12px] text-[13px] font-semibold  text-slate-800 ",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              "input",
              {
                name: "idMember",
                hidden: !0,
                readOnly: !0,
                value: aluno.idMember
              },
              void 0,
              !1,
              {
                fileName: "app/routes/spinning._index.tsx",
                lineNumber: 296,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { name: "id", hidden: !0, readOnly: !0, value: aulas2.id }, void 0, !1, {
              fileName: "app/routes/spinning._index.tsx",
              lineNumber: 301,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: " text-lg font-semibold", children: aulas2.aula }, void 0, !1, {
              fileName: "app/routes/spinning._index.tsx",
              lineNumber: 302,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "text-lg font-semibold", children: aulas2.Hora }, void 0, !1, {
              fileName: "app/routes/spinning._index.tsx",
              lineNumber: 303,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              "button",
              {
                className: "flex items-center space-x-2 h-3/4  text-white rounded-full bg-red-500 py-2 px-3  ",
                type: "submit",
                name: "_action",
                value: "delete",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "text-white items-center  font-medium", children: "N\xE3o Vou" }, void 0, !1, {
                    fileName: "app/routes/spinning._index.tsx",
                    lineNumber: 310,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_ai.AiTwotoneDelete, { className: " text-lg " }, void 0, !1, {
                    fileName: "app/routes/spinning._index.tsx",
                    lineNumber: 313,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/spinning._index.tsx",
                lineNumber: 305,
                columnNumber: 19
              },
              this
            )
          ]
        },
        aulas2.id,
        !0,
        {
          fileName: "app/routes/spinning._index.tsx",
          lineNumber: 292,
          columnNumber: 17
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/routes/spinning._index.tsx",
      lineNumber: 289,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/spinning._index.tsx",
      lineNumber: 288,
      columnNumber: 11
    }, this),
    aluno.idMember === 4 && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "w-full container mx-auto px-8 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "divide-y flex-row divide-gray-200 ", children: agendamentos.map((ag) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "py-3 sm:py-4 flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex mb-2 font-semibold text-lg  space-x-4 justify-center  ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: " uppercase", children: ag.aula }, void 0, !1, {
          fileName: "app/routes/spinning._index.tsx",
          lineNumber: 327,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: ag.Hora }, void 0, !1, {
          fileName: "app/routes/spinning._index.tsx",
          lineNumber: 328,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/spinning._index.tsx",
        lineNumber: 326,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: ag.alunos.map((a) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: " text-center mb-2 flex  items-center  justify-between rounded-[26px] shadow  bg-slate-100 py-0 px-[12px] text-[13px] font-semibold  text-slate-800 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          "img",
          {
            className: "my-0 mr-[8px]  shadow-md -ml-[12px] h-14 w-14 object-cover rounded-full",
            src: a.photo !== "" ? a.photo : "/user.png",
            alt: "avatar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/spinning._index.tsx",
            lineNumber: 335,
            columnNumber: 27
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "mr-8", children: a.nome }, void 0, !1, {
          fileName: "app/routes/spinning._index.tsx",
          lineNumber: 340,
          columnNumber: 27
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/spinning._index.tsx",
        lineNumber: 334,
        columnNumber: 25
      }, this) }, a.idMember, !1, {
        fileName: "app/routes/spinning._index.tsx",
        lineNumber: 333,
        columnNumber: 23
      }, this)) }, void 0, !1, {
        fileName: "app/routes/spinning._index.tsx",
        lineNumber: 331,
        columnNumber: 19
      }, this)
    ] }, ag.id, !0, {
      fileName: "app/routes/spinning._index.tsx",
      lineNumber: 325,
      columnNumber: 17
    }, this)) }, void 0, !1, {
      fileName: "app/routes/spinning._index.tsx",
      lineNumber: 323,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/spinning._index.tsx",
      lineNumber: 322,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/spinning._index.tsx",
    lineNumber: 130,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/spinning._index.tsx",
    lineNumber: 129,
    columnNumber: 5
  }, this);
}

// app/routes/aluno.$maquina.tsx
var aluno_maquina_exports = {};
__export(aluno_maquina_exports, {
  default: () => Maquina,
  loader: () => loader8
});

// app/components/Modal.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function Modal({ children, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    "div",
    {
      className: "justify-center bg-white/80  items-center flex overflow-x-hidden overflow-y-auto fixed  inset-0 z-50 outline-none focus:outline-none",
      onClick: onClose,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "dialog",
        {
          className: "relative  min-h-[350px]  mx-auto  ",
          open: !0,
          onClick: (event) => event.stopPropagation(),
          children
        },
        void 0,
        !1,
        {
          fileName: "app/components/Modal.tsx",
          lineNumber: 7,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Modal.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}
var Modal_default = Modal;

// app/routes/aluno.$maquina.tsx
var import_react21 = require("@remix-run/react"), import_fa5 = require("react-icons/fa"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), loader8 = async ({ request, params }) => params.maquina;
function Maquina() {
  let maquina = (0, import_react21.useLoaderData)(), navigate = (0, import_react21.useNavigate)();
  function closeHandler() {
    navigate("/aluno");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Modal_default, { onClose: closeHandler, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      "img",
      {
        src: `/${maquina}`,
        className: " shadow-lg w-96 h-96  mx-auto",
        alt: "Video"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/aluno.$maquina.tsx",
        lineNumber: 19,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react21.Link, { to: "/aluno", className: "m-4 text-xl ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_fa5.FaWindowClose, {}, void 0, !1, {
      fileName: "app/routes/aluno.$maquina.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno.$maquina.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno.$maquina.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/aluno.indexddd.tsx
var aluno_indexddd_exports = {};
__export(aluno_indexddd_exports, {
  action: () => action7,
  default: () => Treino3,
  loader: () => loader9
});
var import_node15 = require("@remix-run/node"), import_node16 = require("@remix-run/node"), import_react22 = require("@remix-run/react");
var import_date_fns3 = require("date-fns"), import_format2 = __toESM(require("date-fns/format")), import_pt_BR2 = __toESM(require("date-fns/locale/pt-BR")), import_react23 = require("react"), import_lodash4 = __toESM(require("lodash")), import_fa6 = require("react-icons/fa"), import_fi2 = require("react-icons/fi"), import_tb = require("react-icons/tb");

// app/components/ui/card.tsx
var React4 = __toESM(require("react"));
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), Card = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  this
));
Card.displayName = "Card";
var CardHeader = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-3", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 24,
    columnNumber: 3
  },
  this
));
CardHeader.displayName = "CardHeader";
var CardTitle = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
  "h3",
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 36,
    columnNumber: 3
  },
  this
));
CardTitle.displayName = "CardTitle";
var CardDescription = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 51,
    columnNumber: 3
  },
  this
));
CardDescription.displayName = "CardDescription";
var CardContent = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, !1, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 63,
  columnNumber: 3
}, this));
CardContent.displayName = "CardContent";
var CardFooter = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
  "div",
  {
    ref,
    className: cn(" flex items-center p-6 pt-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 71,
    columnNumber: 3
  },
  this
));
CardFooter.displayName = "CardFooter";

// app/routes/aluno.indexddd.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), loader9 = async ({ request, params }) => {
  var _a, _b;
  let session = await getSession(request.headers.get("Cookie"));
  if (!((_a = session.get("aluno")) == null ? void 0 : _a.id))
    return session.set("aluno", {
      red: "/aluno"
    }), (0, import_node15.redirect)("/login", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  let aluno = (await getAluno((_b = session.get("aluno")) == null ? void 0 : _b.id))[0], treinosGrupo = await getTreinos((0, import_date_fns3.getWeek)(new Date())), historicoTreinos = await getHistorico(Number(session.get("aluno").id));
  return (0, import_node16.json)({ aluno, treinosGrupo, historicoTreinos });
}, action7 = async ({ request }) => {
  let form = await request.formData(), values = Object.fromEntries(form), test = await updateHistorico(values);
  return (0, import_node15.redirect)("/aluno");
};
function Treino3() {
  let { aluno, treinosGrupo, historicoTreinos } = (0, import_react22.useLoaderData)(), [grupo, setGrupo] = (0, import_react23.useState)(""), [dt, setDt] = (0, import_react23.useState)(Date), [tipoTreinoGrupo, SetTipoTreinoGRupo] = (0, import_react23.useState)(
    treinosGrupo.filter((el) => el.grupo.includes(""))
  ), [treino, setTreino] = (0, import_react23.useState)(), [checked, setChecked] = (0, import_react23.useState)([]), transition = (0, import_react22.useTransition)(), hitTreino = import_lodash4.default.mapValues(historicoTreinos == null ? void 0 : historicoTreinos.treinos, function(o) {
    let data = (0, import_format2.default)(new Date(o.data), "EEEEEE - dd/MM", {
      locale: import_pt_BR2.default
    });
    return { treino: o.treino, data };
  }), grupotreino = import_lodash4.default.map(import_lodash4.default.groupBy(hitTreino, "data"), (data, idx) => ({ data: idx, treino: data })), PlaneTreino = import_lodash4.default.mapValues(historicoTreinos == null ? void 0 : historicoTreinos.planejados, function(o) {
    return { treino: o.treinoP, dia: o.dia };
  }), plano = import_lodash4.default.map(PlaneTreino, (treino2) => treino2), grupotreinoPlan = import_lodash4.default.map(
    import_lodash4.default.groupBy(PlaneTreino, "data"),
    (data, idx, dt2, feito) => ({ data: idx, treino: data, dt: dt2, feito })
  ), ultimosPlan = import_lodash4.default.takeRight(grupotreinoPlan, 7), ultimos = import_lodash4.default.takeRight(grupotreino, 3), ultimosTreinos = import_lodash4.default.takeRight(historicoTreinos == null ? void 0 : historicoTreinos.treinos, 3), handleGrupo = (event) => {
    setGrupo(event.target.value.split(",")[0]), setDt(event.target.value.split(",")[1]);
    for (var inputs = document.querySelectorAll("[id=done]"), i = 0; i < inputs.length; i++)
      inputs[i].checked = !1;
  }, handleCheck = (event) => {
    var updatedList = [...checked];
    event.target.checked ? updatedList = [...checked, event.target.value] : updatedList.splice(checked.indexOf(event.target.value), 1), setChecked(updatedList);
  };
  var isChecked = (item) => checked.includes(item) ? "bg-green-300 mb-2  font-light  p-2 rounded-lg  shadow-md" : "bg-stone-100 mb-2  font-light  p-2 rounded-lg  ", isCheckedTitle = (item) => checked.includes(item) ? "text-decoration-line: line-through" : "text font-medium text-green-600";
  (0, import_react23.useEffect)(() => {
    setTreino(
      import_lodash4.default.filter(tipoTreinoGrupo, ["grupo", grupo])
    );
  }, [grupo, tipoTreinoGrupo]);
  let textInput = (0, import_react23.useRef)(null), planoAluno = import_lodash4.default.filter(aluno.memberships, {
    membershipStatus: "active"
  }).map((n) => n.name).toString();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: " px-2 mx-auto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "img",
        {
          src: aluno != null && aluno.photoUrl ? aluno == null ? void 0 : aluno.photoUrl : "/user.png",
          className: "rounded-full shadow-lg w-24 h-24 m-4 mx-auto",
          alt: "Avatar"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno.indexddd.tsx",
          lineNumber: 219,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h5", { className: "text-xl  leading-tight mb-2", children: [
        aluno == null ? void 0 : aluno.firstName,
        " ",
        aluno == null ? void 0 : aluno.lastName,
        " -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "font-mono text-gray-400", children: [
          " ",
          aluno == null ? void 0 : aluno.idMember
        ] }, void 0, !0, {
          fileName: "app/routes/aluno.indexddd.tsx",
          lineNumber: 226,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno.indexddd.tsx",
        lineNumber: 224,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "", children: plano && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: " bg-teal-100  rounded-md mb-2 items-center place-content-center gap-2 text-center flex text-stone-600 font-light ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_tb.TbHandClick, { className: "text-stone-600 text-xl" }, void 0, !1, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 254,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: "no treino para ver os exerc\xEDcios" }, void 0, !1, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 255,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno.indexddd.tsx",
          lineNumber: 253,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h2", { className: "  text-stone-500 font-medium mb-2 text-center mt-2", children: "Treinos Planejados" }, void 0, !1, {
          fileName: "app/routes/aluno.indexddd.tsx",
          lineNumber: 258,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno.indexddd.tsx",
          lineNumber: 257,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "text-stone-600 text-center place-content-center gap-2  mx-auto grid grid-cols-2 md:gap-2 md:grid-cols-4 lg:grid-cols-7 lg:container-2xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardTitle, { children: "Segunda" }, void 0, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 266,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardDescription, { children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("segunda");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              index,
              !1,
              {
                fileName: "app/routes/aluno.indexddd.tsx",
                lineNumber: 272,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 271,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 267,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 265,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 264,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardTitle, { children: "Ter\xE7a" }, void 0, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 286,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardDescription, { className: "", children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("terca");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno.indexddd.tsx",
                lineNumber: 292,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 291,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 287,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 285,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 284,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardTitle, { children: "Quarta" }, void 0, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 305,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardDescription, { children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("quarta");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              index,
              !1,
              {
                fileName: "app/routes/aluno.indexddd.tsx",
                lineNumber: 311,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 310,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 306,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 304,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 303,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardTitle, { children: "Quinta" }, void 0, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 325,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardDescription, { children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("quinta");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              index,
              !1,
              {
                fileName: "app/routes/aluno.indexddd.tsx",
                lineNumber: 331,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 330,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 326,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 324,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 323,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardTitle, { children: "Sexta" }, void 0, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 345,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardDescription, { children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("sexta");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              index,
              !1,
              {
                fileName: "app/routes/aluno.indexddd.tsx",
                lineNumber: 351,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 350,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 346,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 344,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 343,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardTitle, { children: "S\xE1bado" }, void 0, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 365,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardDescription, { className: " ", children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("sabado");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              index,
              !1,
              {
                fileName: "app/routes/aluno.indexddd.tsx",
                lineNumber: 371,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 370,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 366,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 364,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 363,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardTitle, { children: "Domingo" }, void 0, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 385,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardDescription, { children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("domingo");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              index,
              !1,
              {
                fileName: "app/routes/aluno.indexddd.tsx",
                lineNumber: 391,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 390,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 386,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 384,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 383,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno.indexddd.tsx",
          lineNumber: 263,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno.indexddd.tsx",
        lineNumber: 252,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/aluno.indexddd.tsx",
        lineNumber: 250,
        columnNumber: 11
      }, this),
      ultimosTreinos.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h2", { className: "  text-stone-500 font-medium mb-1 text-center mt-2", children: "\xDALTIMOS TREINOS" }, void 0, !1, {
          fileName: "app/routes/aluno.indexddd.tsx",
          lineNumber: 409,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "text-gray-500 grid  gap-2 grid-cols-3", children: ultimos.map((u, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Card, { className: " h-full ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardTitle, { children: u.data }, void 0, !1, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 417,
            columnNumber: 25
          }, this),
          u.treino.map((t, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CardDescription, { children: t.treino }, index2, !1, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 419,
            columnNumber: 27
          }, this))
        ] }, void 0, !0, {
          fileName: "app/routes/aluno.indexddd.tsx",
          lineNumber: 416,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno.indexddd.tsx",
          lineNumber: 415,
          columnNumber: 21
        }, this) }, index, !1, {
          fileName: "app/routes/aluno.indexddd.tsx",
          lineNumber: 414,
          columnNumber: 19
        }, this)) }, void 0, !1, {
          fileName: "app/routes/aluno.indexddd.tsx",
          lineNumber: 412,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno.indexddd.tsx",
        lineNumber: 408,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno.indexddd.tsx",
      lineNumber: 218,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: " max-w-lg mt-2 flex mx-auto ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      "select",
      {
        className: "form-select block  justify-center w-full px-3 py-1.5 font-light text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none",
        "aria-label": "Selecione o treino",
        defaultValue: "Selecione o Treino",
        value: grupo,
        onChange: handleGrupo,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { children: "Selecione o Treino" }, void 0, !1, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 440,
            columnNumber: 13
          }, this),
          tipoTreinoGrupo == null ? void 0 : tipoTreinoGrupo.map((grupo2) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: grupo2.grupo, children: grupo2.grupo }, grupo2.grupo, !1, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 442,
            columnNumber: 15
          }, this))
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/aluno.indexddd.tsx",
        lineNumber: 433,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/aluno.indexddd.tsx",
      lineNumber: 432,
      columnNumber: 9
    }, this),
    grupo && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react22.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("input", { readOnly: !0, hidden: !0, type: "text", name: "treino", value: grupo }, void 0, !1, {
        fileName: "app/routes/aluno.indexddd.tsx",
        lineNumber: 451,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("input", { readOnly: !0, hidden: !0, type: "text", name: "data", value: dt }, void 0, !1, {
        fileName: "app/routes/aluno.indexddd.tsx",
        lineNumber: 452,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "input",
        {
          hidden: !0,
          type: "number",
          name: "aluno",
          readOnly: !0,
          defaultValue: aluno.idMember
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno.indexddd.tsx",
          lineNumber: 453,
          columnNumber: 13
        },
        this
      ),
      grupo !== "Selecione o Treino" && planoAluno !== "MEDIDA CERTA - 2023" && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: " block justify-center mx-auto max-w-xl ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-row  justify-evenly  font-bold text-orange-500 items-center m-2 text-xl", children: [
        grupo,
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("button", { className: "bg-blue-500   inline-flex gap-3 items-center px-3 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-md  hover:shadow-lg hover:bg-green-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_fa6.FaCheck, {}, void 0, !1, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 467,
            columnNumber: 23
          }, this),
          transition.state === "submitting" ? "Atualizando..." : "Feito"
        ] }, void 0, !0, {
          fileName: "app/routes/aluno.indexddd.tsx",
          lineNumber: 466,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno.indexddd.tsx",
        lineNumber: 464,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/aluno.indexddd.tsx",
        lineNumber: 463,
        columnNumber: 17
      }, this),
      treino == null ? void 0 : treino.map((e, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "div",
        {
          className: " grid  gap-2 sm:grid-cols-2 lg:grid-cols-3  ",
          children: e.exercicios.map((exe, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: isChecked(exe.nome), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex mb-2 flex-row justify-between ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: isCheckedTitle(exe.nome), children: exe.nome }, void 0, !1, {
                fileName: "app/routes/aluno.indexddd.tsx",
                lineNumber: 485,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                "input",
                {
                  className: " w-6 h-6 accent-green-500 mr-4",
                  value: exe.nome,
                  type: "checkbox",
                  onChange: handleCheck,
                  id: "done",
                  name: "done",
                  ref: textInput
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/aluno.indexddd.tsx",
                  lineNumber: 489,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 484,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex mb-2 shrink-0 items-center content-around  ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_fa6.FaSyncAlt, { className: "shrink-0 mr-3 " }, void 0, !1, {
                fileName: "app/routes/aluno.indexddd.tsx",
                lineNumber: 500,
                columnNumber: 25
              }, this),
              exe.Repeticoes
            ] }, void 0, !0, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 499,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex  mb-2  items-center content-around lowercase", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_fa6.FaDumbbell, { className: " shrink-0 mr-3" }, void 0, !1, {
                fileName: "app/routes/aluno.indexddd.tsx",
                lineNumber: 504,
                columnNumber: 25
              }, this),
              exe.carga
            ] }, void 0, !0, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 503,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex mb-2  shrink-0 items-center content-around lowercase ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_fa6.FaExclamationCircle, { className: "shrink-0 mr-3" }, void 0, !1, {
                fileName: "app/routes/aluno.indexddd.tsx",
                lineNumber: 509,
                columnNumber: 25
              }, this),
              exe.obs
            ] }, void 0, !0, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 508,
              columnNumber: 23
            }, this),
            exe.video !== "" && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: " flex justify-end  text-l mr-4 text-white ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              import_react22.Link,
              {
                className: "bg-orange-300 rounded-lg px-6 p-2 ",
                to: `${exe.video}`,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_fi2.FiVideo, {}, void 0, !1, {
                  fileName: "app/routes/aluno.indexddd.tsx",
                  lineNumber: 517,
                  columnNumber: 29
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno.indexddd.tsx",
                lineNumber: 514,
                columnNumber: 27
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/aluno.indexddd.tsx",
              lineNumber: 513,
              columnNumber: 25
            }, this)
          ] }, index2, !0, {
            fileName: "app/routes/aluno.indexddd.tsx",
            lineNumber: 483,
            columnNumber: 21
          }, this))
        },
        index,
        !1,
        {
          fileName: "app/routes/aluno.indexddd.tsx",
          lineNumber: 479,
          columnNumber: 17
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/routes/aluno.indexddd.tsx",
      lineNumber: 450,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno.indexddd.tsx",
    lineNumber: 217,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/aluno.indexddd.tsx",
    lineNumber: 214,
    columnNumber: 5
  }, this);
}

// app/routes/cadaulas.$aula.tsx
var cadaulas_aula_exports = {};
__export(cadaulas_aula_exports, {
  action: () => action8,
  default: () => aula,
  loader: () => loader10
});
var import_node17 = require("@remix-run/node"), import_node18 = require("@remix-run/node"), import_react24 = require("@remix-run/react"), import_react25 = require("@remix-run/react");
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), loader10 = async ({ request, params }) => {
  let id = params.aula, aula2 = await getAulaId(id);
  return (0, import_node18.json)({ aula: aula2 });
}, action8 = async ({ request }) => {
  let form = await request.formData();
  var dias = [];
  let values = Object.fromEntries(form);
  return values.segunda && dias.push(parseInt(values.segunda)), values.terca && dias.push(parseInt(values.terca)), values.quarta && dias.push(parseInt(values.quarta)), values.quinta && dias.push(parseInt(values.quinta)), values.sexta && dias.push(parseInt(values.sexta)), values.sabado && dias.push(parseInt(values.sabado)), form.get("_action") === "save" ? await updateAula(values, dias) : await deleteAula(values.id), (0, import_node17.redirect)("/cadaulas");
};
function aula() {
  let transition = (0, import_react25.useTransition)(), { aula: aula2 } = (0, import_react24.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "h-full justify-center items-center flex flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h2", { className: "text-2xl font-extrabold text-slate-700", children: "Alterar Aulas" }, void 0, !1, {
      fileName: "app/routes/cadaulas.$aula.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react25.Form, { method: "post", className: "rounded-2xl bg-stone-100 p-6 w-5/4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { hidden: !0, type: "text", name: "id", defaultValue: aula2 == null ? void 0 : aula2.id }, void 0, !1, {
        fileName: "app/routes/cadaulas.$aula.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        "input",
        {
          hidden: !0,
          type: "text",
          name: "icon",
          defaultValue: aula2.classe + ".png"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cadaulas.$aula.tsx",
          lineNumber: 64,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { htmlFor: "conta", className: "text-blue-600 font-semibold", children: "AUla" }, void 0, !1, {
        fileName: "app/routes/cadaulas.$aula.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        "input",
        {
          type: "text",
          id: "turma",
          name: "turma",
          defaultValue: aula2.turma,
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cadaulas.$aula.tsx",
          lineNumber: 73,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { htmlFor: "valor", className: "text-blue-600 font-semibold", children: "Modalidade" }, void 0, !1, {
        fileName: "app/routes/cadaulas.$aula.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        "select",
        {
          id: "classe",
          name: "classe",
          defaultValue: aula2.classe,
          className: "bg-gray-50 border p-2 my-2 border-gray-300 text-gray-900 mb-6  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("option", { value: "lutas", children: "Lutas" }, void 0, !1, {
              fileName: "app/routes/cadaulas.$aula.tsx",
              lineNumber: 88,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("option", { value: "natacao", children: "Nata\xE7\xE3o" }, void 0, !1, {
              fileName: "app/routes/cadaulas.$aula.tsx",
              lineNumber: 89,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("option", { value: "ginastica", children: "Gin\xE1stica" }, void 0, !1, {
              fileName: "app/routes/cadaulas.$aula.tsx",
              lineNumber: 90,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("option", { value: "danca", children: "Dan\xE7a" }, void 0, !1, {
              fileName: "app/routes/cadaulas.$aula.tsx",
              lineNumber: 91,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("option", { value: "spinning", children: "Spinning" }, void 0, !1, {
              fileName: "app/routes/cadaulas.$aula.tsx",
              lineNumber: 92,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("option", { value: "pilates", children: "Pilates" }, void 0, !1, {
              fileName: "app/routes/cadaulas.$aula.tsx",
              lineNumber: 93,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/cadaulas.$aula.tsx",
          lineNumber: 83,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { htmlFor: "password", className: "text-blue-600 font-semibold", children: "In\xEDcio" }, void 0, !1, {
        fileName: "app/routes/cadaulas.$aula.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        "input",
        {
          type: "text",
          id: "inicio",
          name: "inicio",
          defaultValue: aula2.start,
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cadaulas.$aula.tsx",
          lineNumber: 99,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { htmlFor: "password", className: "text-blue-600 font-semibold", children: "Final" }, void 0, !1, {
        fileName: "app/routes/cadaulas.$aula.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        "input",
        {
          type: "text",
          id: "final",
          name: "final",
          defaultValue: aula2.finish,
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cadaulas.$aula.tsx",
          lineNumber: 109,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          "input",
          {
            className: "form-checkbox justify-center h-5 w-5 mr-2 ",
            type: "checkbox",
            name: "segunda",
            defaultChecked: aula2.days.includes(1),
            value: "1"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas.$aula.tsx",
            lineNumber: 123,
            columnNumber: 13
          },
          this
        ),
        "Segunda"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas.$aula.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            defaultChecked: aula2.days.includes(2),
            name: "terca",
            id: "ter\xE7a",
            value: "2"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas.$aula.tsx",
            lineNumber: 133,
            columnNumber: 13
          },
          this
        ),
        "Ter\xE7a"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas.$aula.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            defaultChecked: aula2.days.includes(3),
            name: "quarta",
            id: "quarta",
            value: "3"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas.$aula.tsx",
            lineNumber: 145,
            columnNumber: 13
          },
          this
        ),
        "Quarta"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas.$aula.tsx",
        lineNumber: 144,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            defaultChecked: aula2.days.includes(4),
            name: "quinta",
            value: "4",
            id: "quinta"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas.$aula.tsx",
            lineNumber: 156,
            columnNumber: 13
          },
          this
        ),
        "Quinta"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas.$aula.tsx",
        lineNumber: 155,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            defaultChecked: aula2.days.includes(5),
            name: "sexta",
            value: "5",
            id: "sexta"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas.$aula.tsx",
            lineNumber: 167,
            columnNumber: 13
          },
          this
        ),
        "Sexta"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas.$aula.tsx",
        lineNumber: 166,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            defaultChecked: aula2.days.includes(6),
            name: "sabado",
            id: "sabado",
            value: "6"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas.$aula.tsx",
            lineNumber: 178,
            columnNumber: 13
          },
          this
        ),
        "S\xE1bado"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas.$aula.tsx",
        lineNumber: 177,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-full text-center mt-4 space-x-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "rounded-xl mt-2 bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-1",
            name: "_action",
            value: "save",
            children: transition.state === "submitting" ? "Cadastrando..." : "Cadastrar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas.$aula.tsx",
            lineNumber: 190,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "rounded-xl mt-2 bg-red-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-red-700 hover:-translate-y-1",
            name: "_action",
            value: "delete",
            children: transition.state === "submitting" ? "Apagando..." : "Apagar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas.$aula.tsx",
            lineNumber: 199,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas.$aula.tsx",
        lineNumber: 189,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cadaulas.$aula.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cadaulas.$aula.tsx",
    lineNumber: 58,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/cadaulas.$aula.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

// app/routes/cadaulas.nova.tsx
var cadaulas_nova_exports = {};
__export(cadaulas_nova_exports, {
  action: () => action9,
  default: () => Nova
});
var import_node19 = require("@remix-run/node"), import_react26 = require("@remix-run/react");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), action9 = async ({ request }) => {
  let form = await request.formData();
  var dias = [];
  let values = Object.fromEntries(form);
  return values.segunda && dias.push(parseInt(values.segunda)), values.terca && dias.push(parseInt(values.terca)), values.quarta && dias.push(parseInt(values.quarta)), values.quinta && dias.push(parseInt(values.quinta)), values.sexta && dias.push(parseInt(values.sexta)), values.sabado && dias.push(parseInt(values.sabado)), form.get("_action") === "save" && await createAula(values, dias), (0, import_node19.redirect)("/cadaulas");
};
function Nova() {
  let transition = (0, import_react26.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "h-full justify-center items-center flex flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h2", { className: "text-2xl font-extrabold text-slate-700", children: "Cadastrar Aulas" }, void 0, !1, {
      fileName: "app/routes/cadaulas.nova.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react26.Form, { method: "post", className: "rounded-2xl bg-stone-100 p-6 w-5/4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { htmlFor: "conta", className: "text-blue-600 font-semibold", children: "Aula" }, void 0, !1, {
        fileName: "app/routes/cadaulas.nova.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "input",
        {
          type: "text",
          id: "turma",
          name: "turma",
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cadaulas.nova.tsx",
          lineNumber: 59,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { htmlFor: "valor", className: "text-blue-600 font-semibold", children: "Modalidade" }, void 0, !1, {
        fileName: "app/routes/cadaulas.nova.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "select",
        {
          id: "classe",
          name: "classe",
          className: "bg-gray-50 border p-2 my-2 border-gray-300 text-gray-900 mb-6  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("option", { value: "lutas", children: "Lutas" }, void 0, !1, {
              fileName: "app/routes/cadaulas.nova.tsx",
              lineNumber: 72,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("option", { value: "natacao", children: "Nata\xE7\xE3o" }, void 0, !1, {
              fileName: "app/routes/cadaulas.nova.tsx",
              lineNumber: 73,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("option", { value: "ginastica", children: "Gin\xE1stica" }, void 0, !1, {
              fileName: "app/routes/cadaulas.nova.tsx",
              lineNumber: 74,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("option", { value: "danca", children: "Dan\xE7a" }, void 0, !1, {
              fileName: "app/routes/cadaulas.nova.tsx",
              lineNumber: 75,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("option", { value: "spinning", children: "Spinning" }, void 0, !1, {
              fileName: "app/routes/cadaulas.nova.tsx",
              lineNumber: 76,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("option", { value: "pilates", children: "Pilates" }, void 0, !1, {
              fileName: "app/routes/cadaulas.nova.tsx",
              lineNumber: 77,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/cadaulas.nova.tsx",
          lineNumber: 68,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { htmlFor: "password", className: "text-blue-600 font-semibold", children: "In\xEDcio" }, void 0, !1, {
        fileName: "app/routes/cadaulas.nova.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "input",
        {
          type: "text",
          id: "inicio",
          name: "inicio",
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cadaulas.nova.tsx",
          lineNumber: 83,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { htmlFor: "password", className: "text-blue-600 font-semibold", children: "Final" }, void 0, !1, {
        fileName: "app/routes/cadaulas.nova.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "input",
        {
          type: "text",
          id: "final",
          name: "final",
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cadaulas.nova.tsx",
          lineNumber: 92,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "input",
          {
            className: "form-checkbox justify-center h-5 w-5 mr-2 ",
            type: "checkbox",
            name: "segunda",
            value: "1"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas.nova.tsx",
            lineNumber: 100,
            columnNumber: 13
          },
          this
        ),
        "Segunda"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas.nova.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            name: "terca",
            id: "ter\xE7a",
            value: "2"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas.nova.tsx",
            lineNumber: 109,
            columnNumber: 13
          },
          this
        ),
        "Ter\xE7a"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas.nova.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            name: "quarta",
            id: "quarta",
            value: "3"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas.nova.tsx",
            lineNumber: 119,
            columnNumber: 13
          },
          this
        ),
        "Quarta"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas.nova.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            name: "quinta",
            value: "4",
            id: "quinta"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas.nova.tsx",
            lineNumber: 129,
            columnNumber: 13
          },
          this
        ),
        "Quinta"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas.nova.tsx",
        lineNumber: 128,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            name: "sexta",
            value: "5",
            id: "sexta"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas.nova.tsx",
            lineNumber: 139,
            columnNumber: 13
          },
          this
        ),
        "Sexta"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas.nova.tsx",
        lineNumber: 138,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            name: "sabado",
            id: "sabado",
            value: "6"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas.nova.tsx",
            lineNumber: 149,
            columnNumber: 13
          },
          this
        ),
        "S\xE1bado"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas.nova.tsx",
        lineNumber: 148,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "w-full text-center mt-4 space-x-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "rounded-xl mt-2 bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-1",
          name: "_action",
          value: "save",
          children: transition.state === "submitting" ? "Cadastrando..." : "Cadastrar"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cadaulas.nova.tsx",
          lineNumber: 160,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/cadaulas.nova.tsx",
        lineNumber: 159,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cadaulas.nova.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cadaulas.nova.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/cadaulas.nova.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/aluno._index.tsx
var aluno_index_exports = {};
__export(aluno_index_exports, {
  action: () => action10,
  default: () => Treino4,
  loader: () => loader11
});
var import_node20 = require("@remix-run/node"), import_node21 = require("@remix-run/node"), import_react27 = require("@remix-run/react");
var import_date_fns4 = require("date-fns"), import_format3 = __toESM(require("date-fns/format")), import_pt_BR3 = __toESM(require("date-fns/locale/pt-BR")), import_react28 = require("react"), import_lodash5 = __toESM(require("lodash")), import_fa7 = require("react-icons/fa"), import_fi3 = require("react-icons/fi"), import_tb2 = require("react-icons/tb");

// app/components/ui/accordion.tsx
var React5 = __toESM(require("react")), AccordionPrimitive = __toESM(require("@radix-ui/react-accordion")), import_react_icons = require("@radix-ui/react-icons");
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), Accordion = AccordionPrimitive.Root, AccordionItem = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/accordion.tsx",
    lineNumber: 13,
    columnNumber: 3
  },
  this
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react_icons.ChevronDownIcon, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" }, void 0, !1, {
        fileName: "app/components/ui/accordion.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/accordion.tsx",
    lineNumber: 26,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/accordion.tsx",
  lineNumber: 25,
  columnNumber: 3
}, this));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: cn("pb-4 pt-0", className), children }, void 0, !1, {
      fileName: "app/components/ui/accordion.tsx",
      lineNumber: 50,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/accordion.tsx",
    lineNumber: 45,
    columnNumber: 3
  },
  this
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// app/routes/aluno._index.tsx
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), loader11 = async ({ request, params }) => {
  var _a, _b;
  let session = await getSession(request.headers.get("Cookie"));
  if (!((_a = session.get("aluno")) == null ? void 0 : _a.id))
    return session.set("aluno", {
      red: "/aluno"
    }), (0, import_node20.redirect)("/login", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  let aluno = (await getAluno((_b = session.get("aluno")) == null ? void 0 : _b.id))[0], treinosGrupo = await getTreinos((0, import_date_fns4.getWeek)(new Date())), historicoTreinos = await getHistorico(Number(session.get("aluno").id)), historicoExercicios = await getHistoricoExe(
    Number(session.get("aluno").id)
  );
  return (0, import_node21.json)({ aluno, treinosGrupo, historicoTreinos, historicoExercicios });
}, action10 = async ({ request }) => {
  let form = await request.formData(), _action = form.get("_action"), values = Object.fromEntries(form);
  if (_action === "feito") {
    let test = await updateHistorico(values);
  }
  if (_action === "exe") {
    let values2 = Object.fromEntries(form);
    await updateHistoricoExe(values2);
  }
  return (0, import_node20.redirect)("/aluno");
};
function Treino4() {
  let { aluno, treinosGrupo, historicoTreinos, historicoExercicios } = (0, import_react27.useLoaderData)(), [grupo, setGrupo] = (0, import_react28.useState)(""), [dt, setDt] = (0, import_react28.useState)(Date), [tipoTreinoGrupo, SetTipoTreinoGRupo] = (0, import_react28.useState)(
    treinosGrupo.filter((el) => el.grupo.includes(""))
  ), [treino, setTreino] = (0, import_react28.useState)(), [checked, setChecked] = (0, import_react28.useState)([]), transition = (0, import_react27.useTransition)(), hitTreino = import_lodash5.default.mapValues(historicoTreinos == null ? void 0 : historicoTreinos.treinos, function(o) {
    let data = (0, import_format3.default)(new Date(o.data), "EEEEEE - dd/MM", {
      locale: import_pt_BR3.default
    });
    return { treino: o.treino, data };
  }), grupotreino = import_lodash5.default.map(import_lodash5.default.groupBy(hitTreino, "data"), (data, idx) => ({ data: idx, treino: data })), PlaneTreino = import_lodash5.default.mapValues(historicoTreinos == null ? void 0 : historicoTreinos.planejados, function(o) {
    return { treino: o.treinoP, dia: o.dia };
  }), plano = import_lodash5.default.map(PlaneTreino, (treino2) => treino2), HistoricoExercicios = import_lodash5.default.map(
    import_lodash5.default.mapValues(historicoExercicios == null ? void 0 : historicoExercicios.histexe, function(o) {
      return { treino: o.nome, carga: o.carga, grupo: o.grupo };
    })
  ), TRICEPS = import_lodash5.default.takeRight(
    HistoricoExercicios.filter((o) => {
      var _a;
      return (_a = o.grupo) == null ? void 0 : _a.includes("TRICEPS");
    })
  ), ABDOME = import_lodash5.default.takeRight(
    HistoricoExercicios.filter((o) => {
      var _a;
      return (_a = o.grupo) == null ? void 0 : _a.includes("ABDOME");
    })
  ), BICEPS = import_lodash5.default.takeRight(
    HistoricoExercicios.filter((o) => {
      var _a;
      return (_a = o.grupo) == null ? void 0 : _a.includes("BICEPS");
    })
  ), COSTAS = import_lodash5.default.takeRight(
    HistoricoExercicios.filter((o) => {
      var _a;
      return (_a = o.grupo) == null ? void 0 : _a.includes("COSTAS");
    })
  ), GLUTEOS = import_lodash5.default.takeRight(
    HistoricoExercicios.filter((o) => {
      var _a;
      return (_a = o.grupo) == null ? void 0 : _a.includes("GLUTEOS");
    })
  ), MEMBROS_INFERIORES_GERAL = import_lodash5.default.takeRight(
    HistoricoExercicios.filter(
      (o) => {
        var _a;
        return (_a = o.grupo) == null ? void 0 : _a.includes("MEMBROS INFERIORES GERAL");
      }
    )
  ), MEMBROS_SUPERIORES_GERAL = import_lodash5.default.takeRight(
    HistoricoExercicios.filter(
      (o) => {
        var _a;
        return (_a = o.grupo) == null ? void 0 : _a.includes("MEMBROS SUPERIORES GERAL");
      }
    )
  ), MEMBROS_SUPERIORES_1 = import_lodash5.default.takeRight(
    HistoricoExercicios.filter((o) => {
      var _a;
      return (_a = o.grupo) == null ? void 0 : _a.includes("MEMBROS SUPERIORES 1");
    })
  ), MEMBROS_SUPERIORES_2 = import_lodash5.default.takeRight(
    HistoricoExercicios.filter((o) => {
      var _a;
      return (_a = o.grupo) == null ? void 0 : _a.includes("MEMBROS SUPERIORES 2");
    })
  ), OMBROS = import_lodash5.default.takeRight(
    HistoricoExercicios.filter((o) => {
      var _a;
      return (_a = o.grupo) == null ? void 0 : _a.includes("OMBROS");
    })
  ), PANTURRILHA = import_lodash5.default.takeRight(
    HistoricoExercicios.filter((o) => {
      var _a;
      return (_a = o.grupo) == null ? void 0 : _a.includes("PANTURRILHA");
    })
  ), PEITORAL = import_lodash5.default.takeRight(
    HistoricoExercicios.filter((o) => {
      var _a;
      return (_a = o.grupo) == null ? void 0 : _a.includes("PEITORAL");
    })
  ), POSTERIORES_DE_COXAS = import_lodash5.default.takeRight(
    HistoricoExercicios.filter((o) => {
      var _a;
      return (_a = o.grupo) == null ? void 0 : _a.includes("POSTERIORES DE COXAS");
    })
  ), QUADS = import_lodash5.default.takeRight(
    HistoricoExercicios.filter((o) => {
      var _a;
      return (_a = o.grupo) == null ? void 0 : _a.includes("QUADS");
    })
  ), grupotreinoPlan = import_lodash5.default.map(
    import_lodash5.default.groupBy(PlaneTreino, "data"),
    (data, idx, dt2, feito) => ({ data: idx, treino: data, dt: dt2, feito })
  ), ultimosPlan = import_lodash5.default.takeRight(grupotreinoPlan, 7), ultimos = import_lodash5.default.takeRight(grupotreino, 3), ultimosTreinos = import_lodash5.default.takeRight(historicoTreinos == null ? void 0 : historicoTreinos.treinos, 3), handleGrupo = (event) => {
    setGrupo(event.target.value.split(",")[0]), setDt(event.target.value.split(",")[1]);
    for (var inputs = document.querySelectorAll("[id=done]"), i = 0; i < inputs.length; i++)
      inputs[i].checked = !1;
  }, handleCheck = (event) => {
    var updatedList = [...checked];
    event.target.checked ? updatedList = [...checked, event.target.value] : updatedList.splice(checked.indexOf(event.target.value), 1), setChecked(updatedList);
  };
  var isChecked = (item) => checked.includes(item) ? "bg-green-300 mb-2  font-light  p-2 rounded-lg  shadow-md" : "bg-stone-100 mb-2  font-light  p-2 rounded-lg  ", isCheckedTitle = (item) => checked.includes(item) ? "text-decoration-line: line-through" : "text font-medium text-stone-700";
  (0, import_react28.useEffect)(() => {
    setTreino(
      import_lodash5.default.filter(tipoTreinoGrupo, ["grupo", grupo])
    );
  }, [grupo, tipoTreinoGrupo]);
  let textInput = (0, import_react28.useRef)(null), planoAluno = import_lodash5.default.filter(aluno.memberships, {
    membershipStatus: "active"
  }).map((n) => n.name).toString();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: " px-2 mx-auto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "img",
        {
          src: aluno != null && aluno.photoUrl ? aluno == null ? void 0 : aluno.photoUrl : "/user.png",
          className: "rounded-full shadow-lg w-24 h-24 m-4 mx-auto",
          alt: "Avatar"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 301,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h5", { className: "text-xl  leading-tight mb-2", children: [
        aluno == null ? void 0 : aluno.firstName,
        " ",
        aluno == null ? void 0 : aluno.lastName,
        " -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "font-mono text-gray-400", children: [
          " ",
          aluno == null ? void 0 : aluno.idMember
        ] }, void 0, !0, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 308,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno._index.tsx",
        lineNumber: 306,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "", children: plano && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: " bg-teal-100  rounded-md mb-2 items-center place-content-center gap-2 text-center flex text-stone-600 font-light ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_tb2.TbHandClick, { className: "text-stone-600 text-xl" }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 336,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: "no treino para ver os exerc\xEDcios" }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 337,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 335,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h2", { className: "  text-stone-500 font-medium mb-2 text-center mt-2", children: "Treinos Planejados" }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 340,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 339,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "text-stone-600 text-center place-content-center gap-2  mx-auto grid grid-cols-2 md:gap-2 md:grid-cols-4 lg:grid-cols-7 lg:container-2xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Segunda" }, void 0, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 348,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("segunda");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              index,
              !1,
              {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 354,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 353,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 349,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 347,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 346,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Ter\xE7a" }, void 0, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 368,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { className: "", children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("terca");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 374,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 373,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 369,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 367,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 366,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Quarta" }, void 0, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 387,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("quarta");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              index,
              !1,
              {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 393,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 392,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 388,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 386,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 385,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Quinta" }, void 0, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 407,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("quinta");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              index,
              !1,
              {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 413,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 412,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 408,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 406,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 405,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Sexta" }, void 0, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 427,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("sexta");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              index,
              !1,
              {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 433,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 432,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 428,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 426,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 425,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "S\xE1bado" }, void 0, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 447,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { className: " ", children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("sabado");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              index,
              !1,
              {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 453,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 452,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 448,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 446,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 445,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Domingo" }, void 0, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 467,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("domingo");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              index,
              !1,
              {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 473,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 472,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 468,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 466,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 465,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 345,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno._index.tsx",
        lineNumber: 334,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/aluno._index.tsx",
        lineNumber: 332,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h2", { className: "  text-stone-500 font-medium mb-2 text-center mt-2", children: "Treinos Feitos" }, void 0, !1, {
        fileName: "app/routes/aluno._index.tsx",
        lineNumber: 489,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "text-stone-600 text-center place-content-center gap-2  mx-auto grid grid-cols-2 md:gap-2 md:grid-cols-4 lg:grid-cols-7 lg:container-2xl", children: [
        ABDOME.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Accordion, { type: "single", collapsible: !0, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Abdome" }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 499,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 498,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { children: ABDOME.map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Accordion,
            {
              type: "single",
              collapsible: !0,
              className: "w-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: s.treino }, void 0, !1, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 510,
                  columnNumber: 35
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: [
                  " ",
                  s.carga
                ] }, void 0, !0, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 513,
                  columnNumber: 35
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 509,
                columnNumber: 33
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 505,
              columnNumber: 31
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 504,
            columnNumber: 29
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 502,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 501,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 497,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 496,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 495,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 494,
          columnNumber: 15
        }, this),
        BICEPS.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Accordion, { type: "single", collapsible: !0, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Biceps" }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 535,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 534,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { children: BICEPS.map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Accordion,
            {
              type: "single",
              collapsible: !0,
              className: "w-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: s.treino }, void 0, !1, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 546,
                  columnNumber: 35
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: [
                  " ",
                  s.carga
                ] }, void 0, !0, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 549,
                  columnNumber: 35
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 545,
                columnNumber: 33
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 541,
              columnNumber: 31
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 540,
            columnNumber: 29
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 538,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 537,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 533,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 532,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 531,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 530,
          columnNumber: 15
        }, this),
        COSTAS.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Accordion, { type: "single", collapsible: !0, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Costas" }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 571,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 570,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { children: COSTAS.map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Accordion,
            {
              type: "single",
              collapsible: !0,
              className: "w-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: s.treino }, void 0, !1, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 582,
                  columnNumber: 35
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: [
                  " ",
                  s.carga
                ] }, void 0, !0, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 585,
                  columnNumber: 35
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 581,
                columnNumber: 33
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 577,
              columnNumber: 31
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 576,
            columnNumber: 29
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 574,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 573,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 569,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 568,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 567,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 566,
          columnNumber: 15
        }, this),
        GLUTEOS.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Accordion, { type: "single", collapsible: !0, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Gl\xFAteos" }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 607,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 606,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { children: GLUTEOS.map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Accordion,
            {
              type: "single",
              collapsible: !0,
              className: "w-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: s.treino }, void 0, !1, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 618,
                  columnNumber: 35
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: [
                  " ",
                  s.carga
                ] }, void 0, !0, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 621,
                  columnNumber: 35
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 617,
                columnNumber: 33
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 613,
              columnNumber: 31
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 612,
            columnNumber: 29
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 610,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 609,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 605,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 604,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 603,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 602,
          columnNumber: 15
        }, this),
        MEMBROS_INFERIORES_GERAL.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Accordion, { type: "single", collapsible: !0, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Inferior Geral" }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 643,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 642,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { children: MEMBROS_INFERIORES_GERAL.map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Accordion,
            {
              type: "single",
              collapsible: !0,
              className: "w-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: s.treino }, void 0, !1, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 654,
                  columnNumber: 35
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: [
                  " ",
                  s.carga
                ] }, void 0, !0, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 657,
                  columnNumber: 35
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 653,
                columnNumber: 33
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 649,
              columnNumber: 31
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 648,
            columnNumber: 29
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 646,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 645,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 641,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 640,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 639,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 638,
          columnNumber: 15
        }, this),
        MEMBROS_SUPERIORES_GERAL.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Accordion, { type: "single", collapsible: !0, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Superior Geral" }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 678,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 677,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { children: MEMBROS_SUPERIORES_GERAL.map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Accordion,
            {
              type: "single",
              collapsible: !0,
              className: "w-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: s.treino }, void 0, !1, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 689,
                  columnNumber: 35
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: [
                  " ",
                  s.carga
                ] }, void 0, !0, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 692,
                  columnNumber: 35
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 688,
                columnNumber: 33
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 684,
              columnNumber: 31
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 683,
            columnNumber: 29
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 681,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 680,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 676,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 675,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 674,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 673,
          columnNumber: 15
        }, this),
        MEMBROS_SUPERIORES_1.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Accordion, { type: "single", collapsible: !0, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Superior 1" }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 713,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 712,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { children: MEMBROS_SUPERIORES_1.map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Accordion,
            {
              type: "single",
              collapsible: !0,
              className: "w-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: s.treino }, void 0, !1, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 724,
                  columnNumber: 35
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: [
                  " ",
                  s.carga
                ] }, void 0, !0, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 727,
                  columnNumber: 35
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 723,
                columnNumber: 33
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 719,
              columnNumber: 31
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 718,
            columnNumber: 29
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 716,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 715,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 711,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 710,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 709,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 708,
          columnNumber: 15
        }, this),
        MEMBROS_SUPERIORES_2.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Accordion, { type: "single", collapsible: !0, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Superior 2" }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 748,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 747,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { children: MEMBROS_SUPERIORES_2.map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Accordion,
            {
              type: "single",
              collapsible: !0,
              className: "w-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: s.treino }, void 0, !1, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 759,
                  columnNumber: 35
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: [
                  " ",
                  s.carga
                ] }, void 0, !0, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 762,
                  columnNumber: 35
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 758,
                columnNumber: 33
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 754,
              columnNumber: 31
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 753,
            columnNumber: 29
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 751,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 750,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 746,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 745,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 744,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 743,
          columnNumber: 15
        }, this),
        OMBROS.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Accordion, { type: "single", collapsible: !0, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Ombros" }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 784,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 783,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { children: OMBROS.map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Accordion,
            {
              type: "single",
              collapsible: !0,
              className: "w-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: s.treino }, void 0, !1, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 795,
                  columnNumber: 35
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: [
                  " ",
                  s.carga
                ] }, void 0, !0, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 798,
                  columnNumber: 35
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 794,
                columnNumber: 33
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 790,
              columnNumber: 31
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 789,
            columnNumber: 29
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 787,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 786,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 782,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 781,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 780,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 779,
          columnNumber: 15
        }, this),
        PANTURRILHA.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Accordion, { type: "single", collapsible: !0, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Panturrilha" }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 819,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 818,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { children: PANTURRILHA.map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Accordion,
            {
              type: "single",
              collapsible: !0,
              className: "w-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: s.treino }, void 0, !1, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 830,
                  columnNumber: 35
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: [
                  " ",
                  s.carga
                ] }, void 0, !0, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 833,
                  columnNumber: 35
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 829,
                columnNumber: 33
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 825,
              columnNumber: 31
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 824,
            columnNumber: 29
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 822,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 821,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 817,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 816,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 815,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 814,
          columnNumber: 15
        }, this),
        PEITORAL.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Accordion, { type: "single", collapsible: !0, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Peitoral" }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 855,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 854,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { children: PEITORAL.map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Accordion,
            {
              type: "single",
              collapsible: !0,
              className: "w-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: s.treino }, void 0, !1, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 866,
                  columnNumber: 35
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: [
                  " ",
                  s.carga
                ] }, void 0, !0, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 869,
                  columnNumber: 35
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 865,
                columnNumber: 33
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 861,
              columnNumber: 31
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 860,
            columnNumber: 29
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 858,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 857,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 853,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 852,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 851,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 850,
          columnNumber: 15
        }, this),
        POSTERIORES_DE_COXAS.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Accordion, { type: "single", collapsible: !0, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Posteriores de Coxas" }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 890,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 889,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { children: POSTERIORES_DE_COXAS.map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Accordion,
            {
              type: "single",
              collapsible: !0,
              className: "w-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: s.treino }, void 0, !1, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 901,
                  columnNumber: 35
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: [
                  " ",
                  s.carga
                ] }, void 0, !0, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 904,
                  columnNumber: 35
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 900,
                columnNumber: 33
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 896,
              columnNumber: 31
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 895,
            columnNumber: 29
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 893,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 892,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 888,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 887,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 886,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 885,
          columnNumber: 15
        }, this),
        QUADS.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Accordion, { type: "single", collapsible: !0, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Quadr\xEDceps" }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 925,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 924,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { children: QUADS.map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Accordion,
            {
              type: "single",
              collapsible: !0,
              className: "w-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: s.treino }, void 0, !1, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 936,
                  columnNumber: 35
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: [
                  " ",
                  s.carga
                ] }, void 0, !0, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 939,
                  columnNumber: 35
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 935,
                columnNumber: 33
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 931,
              columnNumber: 31
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 930,
            columnNumber: 29
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 928,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 927,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 923,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 922,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 921,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 920,
          columnNumber: 15
        }, this),
        TRICEPS.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Accordion, { type: "single", collapsible: !0, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardTitle, { children: "Tr\xEDceps" }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 960,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 959,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CardDescription, { children: TRICEPS.map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Accordion,
            {
              type: "single",
              collapsible: !0,
              className: "w-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionItem, { value: "item-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionTrigger, { children: s.treino }, void 0, !1, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 971,
                  columnNumber: 35
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccordionContent, { children: [
                  " ",
                  s.carga
                ] }, void 0, !0, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 974,
                  columnNumber: 35
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 970,
                columnNumber: 33
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 966,
              columnNumber: 31
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 965,
            columnNumber: 29
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 963,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 962,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 958,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 957,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 956,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 955,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno._index.tsx",
        lineNumber: 492,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno._index.tsx",
      lineNumber: 300,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: " max-w-lg mt-2 flex mx-auto ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      "select",
      {
        className: "form-select block  justify-center w-full px-3 py-1.5 font-light text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none",
        "aria-label": "Selecione o treino",
        defaultValue: "Selecione o Treino",
        value: grupo,
        onChange: handleGrupo,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("option", { children: "Selecione o Treino" }, void 0, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 1024,
            columnNumber: 13
          }, this),
          tipoTreinoGrupo == null ? void 0 : tipoTreinoGrupo.map((grupo2) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("option", { value: grupo2.grupo, children: grupo2.grupo }, grupo2.grupo, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 1026,
            columnNumber: 15
          }, this))
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/aluno._index.tsx",
        lineNumber: 1017,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/aluno._index.tsx",
      lineNumber: 1016,
      columnNumber: 9
    }, this),
    grupo && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react27.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("input", { readOnly: !0, hidden: !0, type: "text", name: "treino", value: grupo }, void 0, !1, {
        fileName: "app/routes/aluno._index.tsx",
        lineNumber: 1035,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("input", { readOnly: !0, hidden: !0, type: "text", name: "data", value: dt }, void 0, !1, {
        fileName: "app/routes/aluno._index.tsx",
        lineNumber: 1036,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "input",
        {
          hidden: !0,
          type: "number",
          name: "aluno",
          readOnly: !0,
          defaultValue: aluno.idMember
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 1037,
          columnNumber: 13
        },
        this
      ),
      grupo !== "Selecione o Treino" && planoAluno !== "MEDIDA CERTA - 2023" && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: " block justify-center mx-auto max-w-xl ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex flex-row  justify-evenly  font-bold text-orange-500 items-center m-2 text-xl", children: [
        grupo,
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          "button",
          {
            name: "_action",
            value: "feito",
            className: "bg-blue-500   inline-flex gap-3 items-center px-3 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-md  hover:shadow-lg hover:bg-green-800",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_fa7.FaCheck, {}, void 0, !1, {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 1054,
                columnNumber: 23
              }, this),
              transition.state === "submitting" ? "Atualizando..." : "Feito"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 1050,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/aluno._index.tsx",
        lineNumber: 1048,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/aluno._index.tsx",
        lineNumber: 1047,
        columnNumber: 17
      }, this),
      treino == null ? void 0 : treino.map((e, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "div",
        {
          className: " grid text-stone-600  gap-2 sm:grid-cols-2 lg:grid-cols-3  ",
          children: e.exercicios.map((exe, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: isChecked(exe.nome), children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react27.Form, { method: "post", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              "input",
              {
                readOnly: !0,
                hidden: !0,
                type: "text",
                name: "treino",
                value: grupo
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 1072,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              "input",
              {
                hidden: !0,
                type: "number",
                name: "aluno",
                readOnly: !0,
                defaultValue: aluno.idMember
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 1079,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              "input",
              {
                hidden: !0,
                type: "text",
                name: "exenome",
                readOnly: !0,
                defaultValue: exe.nome
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 1086,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex mb-2 flex-row justify-between ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: isCheckedTitle(exe.nome), children: exe.nome }, void 0, !1, {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 1094,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                "input",
                {
                  className: " w-6 h-6 accent-green-500 mr-4",
                  value: exe.nome,
                  type: "checkbox",
                  onChange: handleCheck,
                  id: "done",
                  name: "done",
                  ref: textInput
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 1097,
                  columnNumber: 27
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 1093,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex mb-2 shrink-0 items-center content-around  ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_fa7.FaSyncAlt, { className: "shrink-0 mr-3 " }, void 0, !1, {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 1108,
                columnNumber: 27
              }, this),
              exe.Repeticoes
            ] }, void 0, !0, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 1107,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex   items-center space-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                "input",
                {
                  placeholder: "Carga treinada",
                  name: "carga",
                  id: "carga",
                  className: "flex  mb-2  items-center content-around lowercase"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 1112,
                  columnNumber: 27
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                "button",
                {
                  className: "flex text-lg content-center text-orange-400 bg-stone-100 ",
                  type: "submit",
                  name: "_action",
                  value: "exe",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_fa7.FaSave, {}, void 0, !1, {
                    fileName: "app/routes/aluno._index.tsx",
                    lineNumber: 1123,
                    columnNumber: 29
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 1118,
                  columnNumber: 27
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 1111,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex mb-2  shrink-0 items-center content-around lowercase ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_fa7.FaExclamationCircle, { className: "shrink-0 mr-3" }, void 0, !1, {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 1129,
                columnNumber: 27
              }, this),
              exe.obs
            ] }, void 0, !0, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 1128,
              columnNumber: 25
            }, this),
            exe.video !== "" && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: " flex justify-end  text-l mr-4 text-white ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              import_react27.Link,
              {
                className: "bg-orange-300 rounded-lg px-6 p-2 ",
                to: `${exe.video}`,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_fi3.FiVideo, {}, void 0, !1, {
                  fileName: "app/routes/aluno._index.tsx",
                  lineNumber: 1137,
                  columnNumber: 31
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno._index.tsx",
                lineNumber: 1134,
                columnNumber: 29
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/aluno._index.tsx",
              lineNumber: 1133,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 1071,
            columnNumber: 23
          }, this) }, index2, !1, {
            fileName: "app/routes/aluno._index.tsx",
            lineNumber: 1070,
            columnNumber: 21
          }, this))
        },
        index,
        !1,
        {
          fileName: "app/routes/aluno._index.tsx",
          lineNumber: 1066,
          columnNumber: 17
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/routes/aluno._index.tsx",
      lineNumber: 1034,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno._index.tsx",
    lineNumber: 299,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/aluno._index.tsx",
    lineNumber: 296,
    columnNumber: 5
  }, this);
}

// app/routes/spinning.$id.tsx
var spinning_id_exports = {};
__export(spinning_id_exports, {
  action: () => action11,
  default: () => Spinning2,
  loader: () => loader12
});
var import_node22 = require("@remix-run/node"), import_node23 = require("@remix-run/node"), import_react29 = require("@remix-run/react");
var import_ai2 = require("react-icons/ai"), import_lodash6 = __toESM(require("lodash")), import_moment2 = __toESM(require("moment"));
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), loader12 = async ({ request, params }) => {
  var _a;
  let session = await getSession(request.headers.get("Cookie")), plano = (_a = session.get("aluno")) == null ? void 0 : _a.plano;
  if (!session.has("aluno"))
    return (0, import_node22.redirect)("/login");
  if (plano.filter(
    (s) => s.includes("FITNESS") || s.includes("SPINNING") || s.includes("TOTAL")
  ).length === 0) {
    let session2 = await getSession(request.headers.get("Cookie"));
    return session2.set("aluno", {
      motivo: "Spinning n\xE3o est\xE1 incluso em seu plano"
    }), (0, import_node22.redirect)("/login", {
      headers: {
        "Set-Cookie": await commitSession(session2)
      }
    });
  }
  let aluno = (await getAluno(Number(params.id)))[0], aulas = await getSpinning(), agendamentos = await getAgendamentos();
  return (0, import_node23.json)({ aluno, aulas, agendamentos });
}, action11 = async ({ request }) => {
  let form = await request.formData(), values = Object.fromEntries(form), agendamentos = await getAgendamentos(), aula_agendada = import_lodash6.default.filter(agendamentos, ["Hora", values.hora]), alunos = import_lodash6.default.flatten(aula_agendada.map((dt) => dt.alunos)), existeaAgenda = import_lodash6.default.filter(alunos, ["idMember", +values.idMember]).length, _action = form.get("_action");
  if (_action === "delete")
    return await deleteAlulaAgendada(values.id, values.idMember), null;
  if (_action === "save")
    return existeaAgenda === 0 ? await createAgendamento(values) : {
      message: aula_agendada.map((h) => h.aula).toString() + " Hor\xE1rio: " + aula_agendada.map((h) => h.Hora).toString() + " j\xE1 agendada para aluno: " + values.nome
    };
};
function Spinning2() {
  let { aluno, aulas, agendamentos } = (0, import_react29.useLoaderData)(), alunoAgendado = (0, import_react29.useActionData)(), id = aluno.idMember, now = new Date(), agora = (0, import_moment2.default)(), hourFilter = aulas.filter(
    (classes) => classes.days.includes(now.getDay())
  ), agendaAluno = agendamentos.filter(
    (e) => e.alunos.some((aluno2) => aluno2.idMember === id)
  ), aula730 = import_lodash6.default.filter(agendamentos, ["Hora", "07:30"]), alunos730 = import_lodash6.default.flatten(aula730.map((dt) => dt.alunos)).length, aula19 = import_lodash6.default.filter(agendamentos, ["Hora", "19:00"]), alunos19 = import_lodash6.default.flatten(aula19.map((dt) => dt.alunos)).length;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_jsx_dev_runtime26.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "px-2 mx-auto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        "img",
        {
          src: aluno.photo !== null ? aluno.photo : "/user.png",
          className: "rounded-full shadow-lg w-24 h-24 m-4 mx-auto",
          alt: "Avatar"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/spinning.$id.tsx",
          lineNumber: 113,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h5", { className: "text-xl  leading-tight mb-2", children: [
        aluno.firstName,
        " ",
        aluno.lastName,
        " -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { className: "font-mono text-gray-400", children: [
          " ",
          aluno.idMember
        ] }, void 0, !0, {
          fileName: "app/routes/spinning.$id.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/spinning.$id.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/spinning.$id.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this),
    hourFilter.length > 0 && aluno.idMember !== 4 && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "w-full container mx-auto px-8 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex   mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h5", { className: "text-md   font-medium leading-none text-slate-500 ", children: "RESERVAR AULAS" }, void 0, !1, {
        fileName: "app/routes/spinning.$id.tsx",
        lineNumber: 127,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/spinning.$id.tsx",
        lineNumber: 126,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("ul", { className: "divide-y divide-gray-200 ", children: [
        hourFilter.map((aula2) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("li", { className: "py-3 sm:py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react29.Form, { method: "post", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
            "input",
            {
              name: "nome",
              hidden: !0,
              readOnly: !0,
              value: aluno.firstName + " " + aluno.lastName
            },
            void 0,
            !1,
            {
              fileName: "app/routes/spinning.$id.tsx",
              lineNumber: 136,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
            "input",
            {
              name: "idMember",
              hidden: !0,
              readOnly: !0,
              value: aluno.idMember
            },
            void 0,
            !1,
            {
              fileName: "app/routes/spinning.$id.tsx",
              lineNumber: 141,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
            "input",
            {
              name: "photo",
              hidden: !0,
              readOnly: !0,
              value: aluno.photo
            },
            void 0,
            !1,
            {
              fileName: "app/routes/spinning.$id.tsx",
              lineNumber: 146,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex-shrink-0  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
              "button",
              {
                disabled: aula2.start === "07:30" ? import_moment2.default.duration(
                  (0, import_moment2.default)(aula2.start, "HH:mm:ss").diff(agora)
                ).asHours() > 0.5 || import_moment2.default.duration(
                  (0, import_moment2.default)(aula2.start, "HH:mm:ss").diff(agora)
                ).asHours() < 0 || +alunos730 > 17 : import_moment2.default.duration(
                  (0, import_moment2.default)(aula2.start, "HH:mm:ss").diff(agora)
                ).asHours() > 0.5 || import_moment2.default.duration(
                  (0, import_moment2.default)(aula2.start, "HH:mm:ss").diff(agora)
                ).asHours() < 0 || +alunos19 > 17,
                className: "bg-green-500 rounded-full px-2 pt-2.5 pb-2  disabled:bg-slate-400 disabled:cursor-not-allowed disabled:opacity-40 text-white active:bg-orange-600 font-bold uppercase text-sm  py-1  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                type: "submit",
                name: "_action",
                value: "save",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_ai2.AiFillSchedule, { className: "text-2xl" }, void 0, !1, {
                  fileName: "app/routes/spinning.$id.tsx",
                  lineNumber: 188,
                  columnNumber: 29
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/spinning.$id.tsx",
                lineNumber: 153,
                columnNumber: 27
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/spinning.$id.tsx",
              lineNumber: 152,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex-1 min-w-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { className: " font-medium text-gray-900 truncate", children: [
                aula2.turma,
                /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "aula",
                    hidden: !0,
                    readOnly: !0,
                    value: aula2.turma
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/spinning.$id.tsx",
                    lineNumber: 195,
                    columnNumber: 29
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "identificador",
                    hidden: !0,
                    readOnly: !0,
                    value: aula2.turma + "|" + aula2.start + "|" + (new Date().getMonth() + 1) + "/" + new Date().getDate()
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/spinning.$id.tsx",
                    lineNumber: 202,
                    columnNumber: 29
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/spinning.$id.tsx",
                lineNumber: 192,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { className: "text-sm  text-blue-500 truncate ", children: [
                aula2.start,
                " - ",
                aula2.finish,
                /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "hora",
                    hidden: !0,
                    readOnly: !0,
                    value: aula2.start
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/spinning.$id.tsx",
                    lineNumber: 220,
                    columnNumber: 29
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/spinning.$id.tsx",
                lineNumber: 218,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/spinning.$id.tsx",
              lineNumber: 191,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "items-center text-base font-semibold text-gray-900  w-1/2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { className: "text-center text-blue-400 font-medium text-sm", children: "RESERVADO" }, void 0, !1, {
                fileName: "app/routes/spinning.$id.tsx",
                lineNumber: 230,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "w-full bg-gray-200  rounded-full ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
                "div",
                {
                  className: "bg-orange-300 rounded-full text-xs font-medium  text-center p-1 leading-none  ",
                  style: aula2.start === "07:30" ? {
                    width: Math.round(alunos730 / 17 * 100) + "%"
                  } : {
                    width: Math.round(alunos19 / 17 * 100) + "%"
                  },
                  children: aula2.start === "07:30" ? Math.round(alunos730 / 17 * 100) + "% " : Math.round(alunos19 / 17 * 100) + "% "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/spinning.$id.tsx",
                  lineNumber: 234,
                  columnNumber: 29
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/spinning.$id.tsx",
                lineNumber: 233,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/spinning.$id.tsx",
              lineNumber: 229,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/spinning.$id.tsx",
            lineNumber: 151,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/spinning.$id.tsx",
          lineNumber: 135,
          columnNumber: 21
        }, this) }, aula2.id, !1, {
          fileName: "app/routes/spinning.$id.tsx",
          lineNumber: 134,
          columnNumber: 19
        }, this)),
        (alunoAgendado == null ? void 0 : alunoAgendado.message) && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { className: "  text-center text-md text-white font-medium px-4 py-3 bg-blue-400 rounded-lg", children: alunoAgendado.message }, void 0, !1, {
          fileName: "app/routes/spinning.$id.tsx",
          lineNumber: 260,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/spinning.$id.tsx",
        lineNumber: 132,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/spinning.$id.tsx",
        lineNumber: 131,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/spinning.$id.tsx",
      lineNumber: 125,
      columnNumber: 11
    }, this),
    agendaAluno.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "divide-y flex-row divide-gray-200 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h2", { className: "text-center font-semibold p-2", children: "Aulas Reservada" }, void 0, !1, {
        fileName: "app/routes/spinning.$id.tsx",
        lineNumber: 271,
        columnNumber: 15
      }, this),
      agendaAluno.map((aulas2) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        import_react29.Form,
        {
          method: "post",
          className: " text-center mb-2 flex h-10 items-center  justify-between rounded-[26px] shadow  bg-slate-200 py-0 px-[12px] text-[13px] font-semibold  text-slate-800 ",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
              "input",
              {
                name: "idMember",
                hidden: !0,
                readOnly: !0,
                value: aluno.idMember
              },
              void 0,
              !1,
              {
                fileName: "app/routes/spinning.$id.tsx",
                lineNumber: 277,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("input", { name: "id", hidden: !0, readOnly: !0, value: aulas2.id }, void 0, !1, {
              fileName: "app/routes/spinning.$id.tsx",
              lineNumber: 282,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: " text-lg font-semibold", children: aulas2.aula }, void 0, !1, {
              fileName: "app/routes/spinning.$id.tsx",
              lineNumber: 283,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { className: "text-lg font-semibold", children: aulas2.Hora }, void 0, !1, {
              fileName: "app/routes/spinning.$id.tsx",
              lineNumber: 284,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
              "button",
              {
                className: "flex items-center space-x-2 h-3/4  text-white rounded-full bg-red-500 py-2 px-3  ",
                type: "submit",
                name: "_action",
                value: "delete",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { className: "text-white items-center  font-medium", children: "N\xE3o Vou" }, void 0, !1, {
                    fileName: "app/routes/spinning.$id.tsx",
                    lineNumber: 291,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_ai2.AiTwotoneDelete, { className: " text-lg " }, void 0, !1, {
                    fileName: "app/routes/spinning.$id.tsx",
                    lineNumber: 294,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/spinning.$id.tsx",
                lineNumber: 286,
                columnNumber: 19
              },
              this
            )
          ]
        },
        aulas2.id,
        !0,
        {
          fileName: "app/routes/spinning.$id.tsx",
          lineNumber: 273,
          columnNumber: 17
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/routes/spinning.$id.tsx",
      lineNumber: 270,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/spinning.$id.tsx",
      lineNumber: 269,
      columnNumber: 11
    }, this),
    aluno.idMember === 4 && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "w-full container mx-auto px-8 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "divide-y flex-row divide-gray-200 ", children: agendamentos.map((ag) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "py-3 sm:py-4 flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex mb-2 font-semibold text-lg  space-x-4 justify-center  ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { className: " uppercase", children: ag.aula }, void 0, !1, {
          fileName: "app/routes/spinning.$id.tsx",
          lineNumber: 308,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { children: ag.Hora }, void 0, !1, {
          fileName: "app/routes/spinning.$id.tsx",
          lineNumber: 309,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/spinning.$id.tsx",
        lineNumber: 307,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { children: ag.alunos.map((a) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: " text-center mb-2 flex  items-center  justify-between rounded-[26px] shadow  bg-slate-100 py-0 px-[12px] text-[13px] font-semibold  text-slate-800 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "img",
          {
            className: "my-0 mr-[8px]  shadow-md -ml-[12px] h-14 w-14 object-cover rounded-full",
            src: a.photo !== "" ? a.photo : "/user.png",
            alt: "avatar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/spinning.$id.tsx",
            lineNumber: 316,
            columnNumber: 27
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { className: "mr-8", children: a.nome }, void 0, !1, {
          fileName: "app/routes/spinning.$id.tsx",
          lineNumber: 321,
          columnNumber: 27
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/spinning.$id.tsx",
        lineNumber: 315,
        columnNumber: 25
      }, this) }, a.idMember, !1, {
        fileName: "app/routes/spinning.$id.tsx",
        lineNumber: 314,
        columnNumber: 23
      }, this)) }, void 0, !1, {
        fileName: "app/routes/spinning.$id.tsx",
        lineNumber: 312,
        columnNumber: 19
      }, this)
    ] }, ag.id, !0, {
      fileName: "app/routes/spinning.$id.tsx",
      lineNumber: 306,
      columnNumber: 17
    }, this)) }, void 0, !1, {
      fileName: "app/routes/spinning.$id.tsx",
      lineNumber: 304,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/spinning.$id.tsx",
      lineNumber: 303,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/spinning.$id.tsx",
    lineNumber: 111,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/spinning.$id.tsx",
    lineNumber: 110,
    columnNumber: 5
  }, this);
}

// app/routes/treinos.$exe.tsx
var treinos_exe_exports = {};
__export(treinos_exe_exports, {
  action: () => action12,
  default: () => Treino5,
  loader: () => loader13
});
var import_node24 = require("@remix-run/node"), import_react30 = require("@remix-run/react");
var import_fa8 = require("react-icons/fa"), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), loader13 = async ({ request, params }) => await getExercicios(params.exe), action12 = async ({ request, params }) => {
  let form = await request.formData(), nome = form.get("nome"), repeticoes = form.get("repeticoes"), carga = form.get("carga"), obs = form.get("obs"), execid = form.get("execid"), video = form.get("video"), _action = form.get("_action"), id = params.exe;
  return _action === "save" && await updateCadastroTreino(id, nome, repeticoes, carga, obs, execid, video), _action === "delete" && await deleteExercicio(id, execid), (0, import_node24.redirect)(`/treinos/${id}`);
};
function Treino5() {
  let { exercicios } = (0, import_react30.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("ul", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "grid grid-cols-12 py-2 gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "col-span-4 font-light text-sm text-sky-500", children: "Nome" }, void 0, !1, {
        fileName: "app/routes/treinos.$exe.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "col-span-2 font-light text-sm text-sky-500", children: "Carga" }, void 0, !1, {
        fileName: "app/routes/treinos.$exe.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "col-span-2 font-light text-sm text-sky-500", children: "Repeti\xE7\xF5es" }, void 0, !1, {
        fileName: "app/routes/treinos.$exe.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "col-span-3 font-light text-sm text-sky-500", children: "Observa\xE7\xE3o" }, void 0, !1, {
        fileName: "app/routes/treinos.$exe.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "col-span-3 font-light text-sm text-sky-500", children: "Video" }, void 0, !1, {
        fileName: "app/routes/treinos.$exe.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/treinos.$exe.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    exercicios.map((exec, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { className: "py-1  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react30.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "grid grid-cols-12  gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        "input",
        {
          hidden: !0,
          type: "text",
          id: "execid",
          name: "execid",
          defaultValue: exec.execid
        },
        void 0,
        !1,
        {
          fileName: "app/routes/treinos.$exe.tsx",
          lineNumber: 54,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        "input",
        {
          type: "text",
          id: "nome",
          name: "nome",
          defaultValue: exec.nome,
          className: "col-span-4 bg-stone-50 border-b-2 "
        },
        void 0,
        !1,
        {
          fileName: "app/routes/treinos.$exe.tsx",
          lineNumber: 62,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        "input",
        {
          type: "text",
          id: "carga",
          name: "carga",
          defaultValue: exec.carga,
          className: "col-span-2 bg-stone-50 border-b-2 "
        },
        void 0,
        !1,
        {
          fileName: "app/routes/treinos.$exe.tsx",
          lineNumber: 70,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        "input",
        {
          type: "text",
          id: "repeticoes",
          name: "repeticoes",
          defaultValue: exec.Repeticoes,
          className: "col-span-2 bg-stone-50 border-b-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/treinos.$exe.tsx",
          lineNumber: 78,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        "input",
        {
          type: "text",
          id: "obs",
          name: "obs",
          defaultValue: exec.obs,
          className: "col-span-3 text-sm bg-stone-50 border-b-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/treinos.$exe.tsx",
          lineNumber: 86,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        "input",
        {
          type: "text",
          id: "video",
          name: "video",
          defaultValue: exec.video,
          className: "col-span-3 text-sm bg-stone-50 border-b-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/treinos.$exe.tsx",
          lineNumber: 93,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "grid justify-items-center grid-cols-2 gap2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
          "button",
          {
            className: "flex content-center text-green-500 bg-stone-100 ",
            type: "submit",
            name: "_action",
            value: "save",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_fa8.FaSave, {}, void 0, !1, {
              fileName: "app/routes/treinos.$exe.tsx",
              lineNumber: 106,
              columnNumber: 19
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/treinos.$exe.tsx",
            lineNumber: 101,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
          "button",
          {
            className: "flex content-center text-red-500 bg-stone-100 ",
            type: "submit",
            name: "_action",
            value: "delete",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_fa8.FaTrash, {}, void 0, !1, {
              fileName: "app/routes/treinos.$exe.tsx",
              lineNumber: 113,
              columnNumber: 19
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/treinos.$exe.tsx",
            lineNumber: 108,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/treinos.$exe.tsx",
        lineNumber: 100,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/treinos.$exe.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/treinos.$exe.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this) }, exec.execid, !1, {
      fileName: "app/routes/treinos.$exe.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this))
  ] }, void 0, !0, {
    fileName: "app/routes/treinos.$exe.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// app/routes/aluno.grupo.tsx
var aluno_grupo_exports = {};
__export(aluno_grupo_exports, {
  action: () => action13,
  default: () => Grupo,
  loader: () => loader14
});
var import_react31 = require("@remix-run/react");
var import_node25 = require("@remix-run/node");
var import_ai3 = require("react-icons/ai"), import_ti = require("react-icons/ti");

// app/components/ui/separator.tsx
var React6 = __toESM(require("react")), SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"));
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), Separator = React6.forwardRef(
  ({ className, orientation = "horizontal", decorative = !0, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/separator.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

// app/routes/aluno.grupo.tsx
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), loader14 = async ({ request, params }) => {
  let grupos = await getGrupos();
  return (0, import_node25.json)(grupos);
};
async function action13({ request }) {
  let formData = await request.formData(), values = Object.fromEntries(formData);
  return await deleteAluno(values), (0, import_node25.redirect)("");
}
function Grupo() {
  let grupos = (0, import_react31.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_jsx_dev_runtime29.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: " text-center font-semibold text-lg  m-4", children: "Grupos projetos especiais" }, void 0, !1, {
      fileName: "app/routes/aluno.grupo.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex items-center gap-2 mb-2  place-content-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react31.Link, { to: "novo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Button, { variant: "secondary", className: "bg-stone-200 flex  ", children: "Novo Grupo" }, void 0, !1, {
        fileName: "app/routes/aluno.grupo.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/aluno.grupo.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react31.Link, { to: "cadaluno", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Button, { variant: "secondary", className: "bg-blue-500 text-white flex  ", children: "Novo Aluno" }, void 0, !1, {
        fileName: "app/routes/aluno.grupo.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/aluno.grupo.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno.grupo.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: " container grid gap-3 grid-cols-1 md:grid-cols-3", children: grupos.map((g, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(CardHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(CardTitle, { className: " mb-3 font-normal items-center place-content-between flex ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex items-center ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react31.Link, { to: g.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_ai3.AiTwotoneEdit, { className: "w-6 h-6 flex mr-2 rounded-full p-1 bg-teal-500  text-white" }, void 0, !1, {
            fileName: "app/routes/aluno.grupo.tsx",
            lineNumber: 57,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno.grupo.tsx",
            lineNumber: 56,
            columnNumber: 19
          }, this),
          g.nome
        ] }, void 0, !0, {
          fileName: "app/routes/aluno.grupo.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Separator, { orientation: "vertical" }, void 0, !1, {
          fileName: "app/routes/aluno.grupo.tsx",
          lineNumber: 62,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno.grupo.tsx",
          lineNumber: 61,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex gap-2", children: [
          "Membros - ",
          g.alunos.length,
          " / ",
          g.numero
        ] }, void 0, !0, {
          fileName: "app/routes/aluno.grupo.tsx",
          lineNumber: 64,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno.grupo.tsx",
        lineNumber: 54,
        columnNumber: 15
      }, this),
      g.alunos.map((a, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react31.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          "input",
          {
            type: "text",
            hidden: !0,
            name: "idMember",
            defaultValue: a.idMember
          },
          void 0,
          !1,
          {
            fileName: "app/routes/aluno.grupo.tsx",
            lineNumber: 70,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("input", { type: "text", hidden: !0, name: "id", defaultValue: g.id }, void 0, !1, {
          fileName: "app/routes/aluno.grupo.tsx",
          lineNumber: 76,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(CardDescription, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex items-center place-content-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "", children: index2 + 1 + " - " + a.nome }, void 0, !1, {
            fileName: "app/routes/aluno.grupo.tsx",
            lineNumber: 91,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("button", { type: "submit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_ti.TiDelete, { className: "text-orange-400 w-6 h-6" }, void 0, !1, {
            fileName: "app/routes/aluno.grupo.tsx",
            lineNumber: 93,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno.grupo.tsx",
            lineNumber: 92,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno.grupo.tsx",
          lineNumber: 78,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno.grupo.tsx",
          lineNumber: 77,
          columnNumber: 19
        }, this)
      ] }, a.id, !0, {
        fileName: "app/routes/aluno.grupo.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/aluno.grupo.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this) }, index, !1, {
      fileName: "app/routes/aluno.grupo.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/aluno.grupo.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react31.Outlet, {}, void 0, !1, {
      fileName: "app/routes/aluno.grupo.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno.grupo.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/bancotreino.tsx
var bancotreino_exports = {};
__export(bancotreino_exports, {
  default: () => Treino6,
  loader: () => loader15
});
var import_node26 = require("@remix-run/node");
var import_react32 = require("@remix-run/react"), import_fa9 = require("react-icons/fa"), import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), loader15 = async ({ request }) => {
  let par = new URL(request.url).searchParams.get("semana_query"), parametro = par ? parseInt(par) : 101, treinos = await getTreinos2(parametro);
  return (0, import_node26.json)({ treinos });
};
function Treino6() {
  var _a;
  let semana = (0, import_react32.useFetcher)(), { treinos } = (0, import_react32.useLoaderData)(), treinoSemana = (_a = semana.data) != null && _a.treinos ? semana.data.treinos : treinos;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "w-full container mx-auto p-2 bg-stone-100 font-Roboto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex items-center  space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h2", { className: "text-2xl font-extrabold text-slate-700", children: "Lista de Treinos" }, void 0, !1, {
        fileName: "app/routes/bancotreino.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(semana.Form, { method: "get", action: ".", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
        "select",
        {
          name: "semana_query",
          onChange: (event) => semana.submit(event.target.form),
          className: "rounded-md border-2 form-control block",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("option", { value: "111", children: "Treino 01 " }, void 0, !1, {
              fileName: "app/routes/bancotreino.tsx",
              lineNumber: 32,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("option", { value: "112", children: "Treino 02 " }, void 0, !1, {
              fileName: "app/routes/bancotreino.tsx",
              lineNumber: 33,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("option", { value: "113", children: "Treino 03 " }, void 0, !1, {
              fileName: "app/routes/bancotreino.tsx",
              lineNumber: 34,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("option", { value: "114", children: "Treino 04 " }, void 0, !1, {
              fileName: "app/routes/bancotreino.tsx",
              lineNumber: 35,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("option", { value: "115", children: "Treino 05 " }, void 0, !1, {
              fileName: "app/routes/bancotreino.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("option", { value: "116", children: "Treino 06 " }, void 0, !1, {
              fileName: "app/routes/bancotreino.tsx",
              lineNumber: 37,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("option", { value: "117", children: "Melhor de Todas " }, void 0, !1, {
              fileName: "app/routes/bancotreino.tsx",
              lineNumber: 38,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("option", { value: "118", children: "Melhor de Todas 2" }, void 0, !1, {
              fileName: "app/routes/bancotreino.tsx",
              lineNumber: 39,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("option", { value: "201", children: "Iniciante 1" }, void 0, !1, {
              fileName: "app/routes/bancotreino.tsx",
              lineNumber: 40,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("option", { value: "202", children: "Iniciante 2" }, void 0, !1, {
              fileName: "app/routes/bancotreino.tsx",
              lineNumber: 41,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("option", { value: "203", children: "Iniciante 3" }, void 0, !1, {
              fileName: "app/routes/bancotreino.tsx",
              lineNumber: 42,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("option", { value: "204", children: "Iniciante 4" }, void 0, !1, {
              fileName: "app/routes/bancotreino.tsx",
              lineNumber: 43,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/bancotreino.tsx",
          lineNumber: 28,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/bancotreino.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/bancotreino.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "container mx-auto content-center  py-6 px-2 md:px-0 md:grid md:gap-x-6  md:gap-y-4 md:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "overflow-x-auto relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("table", { className: "w-full  text-sm text-left text-gray-500 dark:text-gray-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("thead", { className: "text-xs  text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("tr", { className: "rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("th", { scope: "col", className: " ", children: "Grupo" }, void 0, !1, {
            fileName: "app/routes/bancotreino.tsx",
            lineNumber: 52,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("th", { scope: "col", className: "text-center ", children: "Treino" }, void 0, !1, {
            fileName: "app/routes/bancotreino.tsx",
            lineNumber: 55,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/bancotreino.tsx",
          lineNumber: 51,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/bancotreino.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("tbody", { children: treinoSemana.map((treino) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("tr", { className: " dark:bg-gray-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("th", { className: "py-1 flex gap-x-2 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white", children: treino.grupo }, void 0, !1, {
            fileName: "app/routes/bancotreino.tsx",
            lineNumber: 67,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("td", { className: " text-center", children: treino.semana - 100 }, void 0, !1, {
            fileName: "app/routes/bancotreino.tsx",
            lineNumber: 70,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("td", { className: "  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react32.Link, { to: `${treino.id}`, className: "text-sky-600 text-lg ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_fa9.FaListAlt, {}, void 0, !1, {
            fileName: "app/routes/bancotreino.tsx",
            lineNumber: 74,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/bancotreino.tsx",
            lineNumber: 72,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/bancotreino.tsx",
            lineNumber: 71,
            columnNumber: 19
          }, this)
        ] }, treino.id, !0, {
          fileName: "app/routes/bancotreino.tsx",
          lineNumber: 66,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/bancotreino.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/bancotreino.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/bancotreino.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "col-span-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h2", { className: " font-semibold text-center text-slate-700", children: "Lista de Exerc\xEDcios" }, void 0, !1, {
          fileName: "app/routes/bancotreino.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react32.Outlet, {}, void 0, !1, {
          fileName: "app/routes/bancotreino.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/bancotreino.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/bancotreino.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/bancotreino.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/index_foto.tsx
var index_foto_exports = {};
__export(index_foto_exports, {
  default: () => Index5,
  loader: () => loader16
});
var import_fa11 = require("react-icons/fa");

// app/components/Aulas.tsx
var import_fa10 = require("react-icons/fa"), import_react33 = require("react"), import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function Aulas(props) {
  let { aulas } = props, now = new Date();
  var horaCerta = "";
  now.getHours() < 10 && (horaCerta = "0" + now.getHours()), now.getHours() >= 10 && (horaCerta = now.getHours());
  let hourFilter = aulas.filter(
    (classes) => classes.start >= horaCerta.toString() && classes.days.includes(now.getDay())
  ), [procuraAula, setProcuraAula] = (0, import_react33.useState)(""), filtrada = aulas.filter(
    (aulas2) => aulas2.turma.toLowerCase().includes(procuraAula.toLowerCase())
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_jsx_dev_runtime31.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex justify-center flex-wrap mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: " w-full   ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "  text-stone-800 text-center", children: "PR\xD3XIMAS AULAS" }, void 0, !1, {
      fileName: "app/components/Aulas.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "overflow-x-auto relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "p-2 w-full ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "mt-2 mb-2  text-orange-400 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "relative  ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_fa10.FaSearch, {}, void 0, !1, {
            fileName: "app/components/Aulas.tsx",
            lineNumber: 41,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/Aulas.tsx",
            lineNumber: 40,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            "input",
            {
              type: "search",
              id: "search",
              value: procuraAula,
              onChange: (e) => setProcuraAula(e.target.value),
              placeholder: "Procurar Aulas",
              className: "block p-1  pl-10 w-full text-sm text-stone-900 bg-stone-50 rounded-lg border border-stone-300  "
            },
            void 0,
            !1,
            {
              fileName: "app/components/Aulas.tsx",
              lineNumber: 44,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Aulas.tsx",
          lineNumber: 39,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Aulas.tsx",
          lineNumber: 38,
          columnNumber: 15
        }, this),
        procuraAula.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("table", { className: "w-full  text-sm text-left text-stone-500 dark:text-stone-400", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("thead", { className: "text-xs  text-stone-700 uppercase bg-stone-300 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("tr", { className: "rounded-lg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("th", { scope: "col", className: " px-6 py-2 ", children: "Aulas" }, void 0, !1, {
              fileName: "app/components/Aulas.tsx",
              lineNumber: 60,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("th", { scope: "col", className: "  px-6 py-2", children: "Hor\xE1rio" }, void 0, !1, {
              fileName: "app/components/Aulas.tsx",
              lineNumber: 63,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("th", { scope: "col", className: " ", children: "Dias" }, void 0, !1, {
              fileName: "app/components/Aulas.tsx",
              lineNumber: 66,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Aulas.tsx",
            lineNumber: 59,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/components/Aulas.tsx",
            lineNumber: 58,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("tbody", { children: filtrada.map((aula2) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("tr", { className: " dark:bg-gray-800", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
              "th",
              {
                scope: "row",
                className: "py-2 px-2 flex gap-x-2 items-center font-medium text-stone-900 whitespace-nowrap dark:text-white",
                children: aula2.turma
              },
              void 0,
              !1,
              {
                fileName: "app/components/Aulas.tsx",
                lineNumber: 74,
                columnNumber: 27
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("td", { className: "py-2 px-6", children: aula2.start }, void 0, !1, {
              fileName: "app/components/Aulas.tsx",
              lineNumber: 84,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("td", { className: "py-2 font-mono text-stone-500 ", children: aula2.days.map((m) => m == 1 ? "SEG " : m == 2 ? "TER " : m == 3 ? "QUA  " : m == 4 ? "QUI " : m == 5 ? "SEX " : m == 6 ? "SAB " : "DOM") }, void 0, !1, {
              fileName: "app/components/Aulas.tsx",
              lineNumber: 86,
              columnNumber: 27
            }, this)
          ] }, aula2.id, !0, {
            fileName: "app/components/Aulas.tsx",
            lineNumber: 73,
            columnNumber: 25
          }, this)) }, void 0, !1, {
            fileName: "app/components/Aulas.tsx",
            lineNumber: 71,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Aulas.tsx",
          lineNumber: 57,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/Aulas.tsx",
          lineNumber: 56,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Aulas.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      procuraAula.length == 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("table", { className: "w-full  text-sm text-left text-stone-600 dark:text-gray-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("thead", { className: "text-xs  text-stone-700 uppercase bg-stone-300 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("tr", { className: "rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("th", { scope: "col", className: "px-6 py-2 ", children: "Aulas" }, void 0, !1, {
            fileName: "app/components/Aulas.tsx",
            lineNumber: 121,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("th", { scope: "col", className: "py-2", children: "Hor\xE1rio" }, void 0, !1, {
            fileName: "app/components/Aulas.tsx",
            lineNumber: 124,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Aulas.tsx",
          lineNumber: 120,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/Aulas.tsx",
          lineNumber: 119,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("tbody", { children: hourFilter.map((aula2) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("tr", { className: " dark:bg-gray-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            "th",
            {
              scope: "row",
              className: "py-2 px-6 flex gap-x-2 items-center font-medium text-stone-900 whitespace-nowrap dark:text-white",
              children: aula2.turma
            },
            void 0,
            !1,
            {
              fileName: "app/components/Aulas.tsx",
              lineNumber: 132,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("td", { className: "py-2 text-xs md:text-base  ", children: [
            aula2.start,
            " - ",
            aula2.finish
          ] }, void 0, !0, {
            fileName: "app/components/Aulas.tsx",
            lineNumber: 142,
            columnNumber: 23
          }, this)
        ] }, aula2.id, !0, {
          fileName: "app/components/Aulas.tsx",
          lineNumber: 131,
          columnNumber: 21
        }, this)) }, void 0, !1, {
          fileName: "app/components/Aulas.tsx",
          lineNumber: 129,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Aulas.tsx",
        lineNumber: 118,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Aulas.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Aulas.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Aulas.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Aulas.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/index_foto.tsx
var import_node27 = require("@remix-run/node");
var import_react34 = require("@remix-run/react");

// app/components/Eventos.tsx
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
function Eventos() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("figure", { className: "flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("blockquote", { className: "mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Aul\xE3o de Spinning e Gl\xFAteos" }, void 0, !1, {
          fileName: "app/components/Eventos.tsx",
          lineNumber: 6,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { className: "my-4 text-orange-500 font-medium", children: "Aul\xE3o de Spinning FERIAD\xC3O com o professor PEDR\xC3O" }, void 0, !1, {
          fileName: "app/components/Eventos.tsx",
          lineNumber: 9,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Eventos.tsx",
        lineNumber: 5,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("figcaption", { className: "flex justify-center items-center space-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("img", { className: "w-full", src: "aulao2.jpg", alt: "spinning " }, void 0, !1, {
        fileName: "app/components/Eventos.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Eventos.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Eventos.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("figure", { className: "flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("blockquote", { className: "mx-auto mb-2 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Espet\xE1culo de Ballet Cl\xE1ssico" }, void 0, !1, {
          fileName: "app/components/Eventos.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { className: "my-2 text-rose-300 text-lg font-medium", children: "A Bela Adormecida" }, void 0, !1, {
          fileName: "app/components/Eventos.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Eventos.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("figcaption", { className: "flex justify-center items-center space-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("img", { className: "w-full ", src: "ballet.jpg", alt: "Ballet" }, void 0, !1, {
        fileName: "app/components/Eventos.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Eventos.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Eventos.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Eventos.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/index_foto.tsx
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), loader16 = async ({ request }) => {
  let TodasAulas = await getAulas();
  return (0, import_node27.json)({ TodasAulas });
};
function Index5() {
  let { TodasAulas } = (0, import_react34.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "text-gray-600 body-font", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Navbar2, {}, void 0, !1, {
      fileName: "app/routes/index_foto.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "h-80 xl:h-5/6 w-full bg-gradient-to-tl from-black to-orange-500 relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
        "img",
        {
          alt: "content",
          className: "w-full h-full object-cover absolute mix-blend-overlay ",
          src: "/fundo_novo.jpg"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index_foto.tsx",
          lineNumber: 22,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "pt-10 xl:pt-20 xl:pl-10 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h2", { className: "text-4xl xl:text-6xl font-extrabold shadow-xl text-white md:text-3xl", children: "Quattor Academia" }, void 0, !1, {
          fileName: "app/routes/index_foto.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "text-md xl:text-2xl font-bold text-white ", children: "Jornada de Resultados Reais" }, void 0, !1, {
          fileName: "app/routes/index_foto.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index_foto.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: " pl-32 pt-8 flex justify-end items-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
        "img",
        {
          alt: "logo",
          src: "/15anos.svg",
          className: "mt-10 w-60 xl:w-96 xl:mt-0  "
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index_foto.tsx",
          lineNumber: 37,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/index_foto.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index_foto.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex mt-1 flex-wrap -m-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "p-2 w-full md:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex rounded-lg h-full bg-stone-100 shadow-lg  p-8 flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex items-center mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_fa11.FaMapMarkedAlt, {}, void 0, !1, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 50,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 49,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h2", { className: "text-gray-900 text-lg title-font font-medium", children: "Onde Estamos" }, void 0, !1, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index_foto.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex-grow text-center ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "leading-relaxed font-bold", children: "Rua 5 Sul - Arauc\xE1rias - \xC1guas Claras - DF" }, void 0, !1, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 57,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: " ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
              "a",
              {
                href: "https://wa.me/5561993190568",
                className: "mt-2  font-semibold inline-flex items-center ",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_fa11.FaWhatsapp, { className: "text-green-600 text-2xl mr-2 " }, void 0, !1, {
                    fileName: "app/routes/index_foto.tsx",
                    lineNumber: 64,
                    columnNumber: 19
                  }, this),
                  "(61) 99319-0568"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/index_foto.tsx",
                lineNumber: 61,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("a", { href: "https://wa.me/5561993190568", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("button", { className: "bg-green-600 tracking-tighter ml-5 px-2 py-1  text-white inline-flex items-center space-x-2 rounded", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_fa11.FaWhatsapp, {}, void 0, !1, {
                fileName: "app/routes/index_foto.tsx",
                lineNumber: 69,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { children: "Aula experimental" }, void 0, !1, {
                fileName: "app/routes/index_foto.tsx",
                lineNumber: 70,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/index_foto.tsx",
              lineNumber: 68,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/index_foto.tsx",
              lineNumber: 67,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 60,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index_foto.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index_foto.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index_foto.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "p-2 w-full md:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex rounded-lg h-full bg-stone-100 shadow-lg p-8 flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex items-center mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_fa11.FaClock, {}, void 0, !1, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 80,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h2", { className: "text-gray-900 text-lg title-font font-medium", children: "Hor\xE1rio de Funcionamento" }, void 0, !1, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index_foto.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex-grow text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "leading-relaxed  text-red-500 font-bold", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { className: "font-semibold text-gray-900 ", children: "Segunda a Sexta:" }, void 0, !1, {
              fileName: "app/routes/index_foto.tsx",
              lineNumber: 89,
              columnNumber: 17
            }, this),
            " ",
            "6:00h \xE0s 23:00h"
          ] }, void 0, !0, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "leading-relaxed text-red-500 font-bold", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { className: "font-semibold text-gray-900 ", children: "S\xE1bados e Feriados:" }, void 0, !1, {
              fileName: "app/routes/index_foto.tsx",
              lineNumber: 95,
              columnNumber: 17
            }, this),
            " ",
            "8:00h \xE0s 12:00h"
          ] }, void 0, !0, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 94,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index_foto.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index_foto.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index_foto.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index_foto.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Aulas, { aulas: TodasAulas }, void 0, !1, {
      fileName: "app/routes/index_foto.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Eventos, {}, void 0, !1, {
      fileName: "app/routes/index_foto.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index_foto.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/print.$exe.tsx
var print_exe_exports = {};
__export(print_exe_exports, {
  default: () => Treino7,
  loader: () => loader17
});
var import_react35 = require("@remix-run/react");
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime"), loader17 = async ({ request, params }) => await getExercicios(params.exe);
function Treino7() {
  let { exercicios } = (0, import_react35.useLoaderData)(), grupo = (0, import_react35.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_jsx_dev_runtime34.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "w-full container text-center mx-auto bg-white  rounded-sm border border-gray-500", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("header", { className: "px-5 py-4 border-b border-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: " flex place-content-between items-center font-extrabold text-3xl print:text-xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("img", { src: "/logo_alto.svg", className: " w-32", alt: "logo" }, void 0, !1, {
          fileName: "app/routes/print.$exe.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        grupo.grupo,
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("img", { className: " w-20 ", alt: "qr", src: "/qr1.svg" }, void 0, !1, {
          fileName: "app/routes/print.$exe.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/print.$exe.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/print.$exe.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("table", { className: "table-auto w-full text-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("tbody", { className: "text-sm divide-y divide-gray-500", children: exercicios.map((exec, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("tr", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("td", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: " font-extrabold text-3xl mb-2", children: [
          index + 1,
          " - ",
          exec.nome
        ] }, void 0, !0, {
          fileName: "app/routes/print.$exe.tsx",
          lineNumber: 29,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "pl-8 space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "items-center flex font-semibold text-lg mb-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
              "img",
              {
                src: "/ponto_vermelho.svg",
                alt: "bolas",
                className: "w-3 mr-3 "
              },
              void 0,
              !1,
              {
                fileName: "app/routes/print.$exe.tsx",
                lineNumber: 47,
                columnNumber: 23
              },
              this
            ),
            exec.Repeticoes
          ] }, void 0, !0, {
            fileName: "app/routes/print.$exe.tsx",
            lineNumber: 45,
            columnNumber: 21
          }, this),
          exec.obs && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "items-center flex font-semibold text-lg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
              "img",
              {
                src: "/ponto_laranja.svg",
                alt: "bolas",
                className: "w-3 mr-3 "
              },
              void 0,
              !1,
              {
                fileName: "app/routes/print.$exe.tsx",
                lineNumber: 58,
                columnNumber: 25
              },
              this
            ),
            exec.obs
          ] }, void 0, !0, {
            fileName: "app/routes/print.$exe.tsx",
            lineNumber: 55,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/print.$exe.tsx",
          lineNumber: 32,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/print.$exe.tsx",
        lineNumber: 28,
        columnNumber: 17
      }, this) }, exec.execid, !1, {
        fileName: "app/routes/print.$exe.tsx",
        lineNumber: 27,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/print.$exe.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/print.$exe.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/print.$exe.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("footer", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
      "img",
      {
        className: " h-[80px] pt-1 mx-auto items-center",
        alt: "footer",
        src: "/hipertrofia3.svg"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/print.$exe.tsx",
        lineNumber: 74,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/print.$exe.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/print.$exe.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/index_bak.tsx
var index_bak_exports = {};
__export(index_bak_exports, {
  default: () => Index6,
  loader: () => loader18
});
var import_node28 = require("@remix-run/node"), import_react36 = require("@remix-run/react");
var import_fa12 = require("react-icons/fa"), import_gi = require("react-icons/gi");
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), loader18 = async ({ request }) => {
  let TodasAulas = await getAulas();
  return (0, import_node28.json)({ TodasAulas });
};
function Index6() {
  let { TodasAulas } = (0, import_react36.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "md:pt-4 h-screen md:container md:mx-auto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: " bg-white py-4 px-6 mx-auto rounded-lg ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: " h-[140px] w-[100px] md:w-[400px] md:h-[200px]" }, void 0, !1, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex flex-col items-center md:-mt-44 -mt-32", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("img", { src: "/back1.svg", alt: "logo", className: "w-48 md:w-72 " }, void 0, !1, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex items-center space-x-2 mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { className: "text-2xl", children: "Rua 5 sul - \xC1guas Claras" }, void 0, !1, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { className: "text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          "a",
          {
            href: "https://wa.me/5561993190568",
            className: "mt-2 text-xl font-semibold inline-flex items-center ",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_fa12.FaWhatsapp, { className: "text-green-600 text-3xl mr-2  " }, void 0, !1, {
                fileName: "app/routes/index_bak.tsx",
                lineNumber: 36,
                columnNumber: 15
              }, this),
              "(61) 99319-0568"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 33,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Seg \xE0 sex 6h - 23h - sab / dom / Feriados - 8h - 12h" }, void 0, !1, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex items-center space-x-4 mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          "a",
          {
            href: "https://wa.me/5561993190568",
            className: "flex items-center bg-blue-400 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_gi.GiGymBag, {}, void 0, !1, {
                fileName: "app/routes/index_bak.tsx",
                lineNumber: 56,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("span", { children: "Agendar " }, void 0, !1, {
                fileName: "app/routes/index_bak.tsx",
                lineNumber: 57,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 53,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          "a",
          {
            href: "https://wa.me/5561993190568",
            className: "flex items-center bg-blue-400 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-4 w-4",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z",
                      clipRule: "evenodd"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/index_bak.tsx",
                      lineNumber: 67,
                      columnNumber: 17
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/index_bak.tsx",
                  lineNumber: 62,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("span", { children: "Mensagem" }, void 0, !1, {
                fileName: "app/routes/index_bak.tsx",
                lineNumber: 72,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 59,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index_bak.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4  gap-x-2 lg:gap-x-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "mx-2 mt-5  md:block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react36.Link, { to: "ballet", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("img", { className: "rounded-lg bg-cover ", src: "/belaweb.jpg", alt: "" }, void 0, !1, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex flex-row justify-between items-start mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          import_react36.Link,
          {
            to: "ballet",
            className: "text-lg mx-auto bg-yellow-300 block p-2 w-full text-center rounded-md font-bold text-blue-800 ",
            children: "Programa do Espet\xE1culo"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 144,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 143,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "mx-2 mt-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("img", { className: "rounded-lg bg-cover", src: "/amigo.jpg", alt: "" }, void 0, !1, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 154,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex flex-row justify-between items-start mt-4" }, void 0, !1, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 155,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "mx-2 hidden  md:block mt-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("img", { className: "rounded-lg bg-cover", src: "/foto_natacao.jpg", alt: "" }, void 0, !1, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 175,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex flex-row justify-between items-start mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { className: "text-lg font-bold text-blue-400 ", children: "Nata\xE7\xE3o" }, void 0, !1, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 178,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { className: "text-gray-500 mb-4", children: "Infantil" }, void 0, !1, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 179,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 177,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 176,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 174,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "mx-2 mt-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          "img",
          {
            className: "rounded-lg bg-cover",
            src: "/musculacao_foto.jpg",
            alt: ""
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 185,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex flex-row justify-between items-start mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { className: "text-lg font-bold text-blue-400 ", children: "Muscula\xE7\xE3o" }, void 0, !1, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 192,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { className: "text-gray-500 mb-4", children: "M\xE9todo Exclusivo" }, void 0, !1, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 193,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 191,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 190,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 184,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index_bak.tsx",
      lineNumber: 138,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "overflow-auto rounded-lg mb-2 max-h-[500px] ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Aulas, { aulas: TodasAulas }, void 0, !1, {
      fileName: "app/routes/index_bak.tsx",
      lineNumber: 322,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index_bak.tsx",
      lineNumber: 321,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index_bak.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/cadastro.tsx
var cadastro_exports = {};
__export(cadastro_exports, {
  action: () => action14,
  default: () => Cadastro
});
var import_zod = require("zod"), import_domain_functions = require("domain-functions"), import_remix_forms = require("remix-forms"), import_node29 = require("@remix-run/node");
var import_react37 = require("@remix-run/react"), import_jsx_dev_runtime36 = require("react/jsx-dev-runtime"), schema = import_zod.z.object({
  grupo: import_zod.z.string().min(4, { message: "Descri\xE7\xE3o do grupo com no m\xEDnimo 4 caracteres" }),
  semana: import_zod.z.number().min(1, { message: "Informe o n\xFAmero da Semana" }),
  nome: import_zod.z.string().min(1, { message: "Informe o nome do exerc\xEDcio" }).toUpperCase(),
  repeticoes: import_zod.z.string().min(1, { message: "Repeti\xE7\xF5es do exerc\xEDcio" }),
  carga: import_zod.z.string().min(1, { message: "Informe as cargas do exerc\xEDcio " }),
  obs: import_zod.z.string(),
  video: import_zod.z.string()
}), mutation = (0, import_domain_functions.makeDomainFunction)(schema)(async (values) => await updateTreino(values)), action14 = async ({ request }) => {
  let result = await (0, import_remix_forms.performMutation)({ request, schema, mutation });
  return result.success ? (0, import_node29.redirect)(`/cadastro/${result.data.id}`) : (0, import_node29.json)(result, 400);
};
function Cadastro() {
  let transition = (0, import_react37.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "w-full bg-stone-100 font-Roboto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "h-full mt-6 items-center flex flex-col gap-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h2", { className: "text-2xl font-extrabold text-slate-700", children: "Cadastro de Exerc\xEDcio" }, void 0, !1, {
        fileName: "app/routes/cadastro.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "block p-6 rounded-lg shadow-lg bg-white w-3/4 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_remix_forms.Form, { schema, children: ({ Field, Errors, Button: Button2, register }) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Field, { name: "grupo", label: "Grupo", children: ({ Label, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "form-group ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
            Label,
            {
              htmlFor: "grupo",
              className: "form-label font-light inline-block  text-gray-400",
              children: "Grupo"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cadastro.tsx",
              lineNumber: 61,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
            "select",
            {
              ...register("grupo"),
              className: `rounded-md border-2 form-control block
                          w-full `,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "PEITORAL", children: "PEITORAL" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 72,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "OMBROS", children: "OMBROS" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 73,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "MEMBROS SUPERIORES 1", children: "MEMBROS SUPERIORES 1" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 74,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "COSTAS", children: "COSTAS" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 77,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "MEMBROS SUPERIORES 2", children: "MEMBROS SUPERIORES 2" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 78,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "BICEPS", children: "BICEPS" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 81,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "TRICEPS", children: "TRICEPS" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 82,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "QUADS", children: "QUADS" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 83,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "POSTERIORES DE COXAS", children: "POSTERIORES DE COXAS" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 84,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "GLUTEOS", children: "GLUTEOS" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 87,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "PANTURRILHA", children: "PANTURRILHA" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 88,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "ABDOME", children: "ABDOME" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 89,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "MEMBROS INFERIORES GERAL", children: "MEMBROS INFERIORES GERAL" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 90,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "MEMBROS SUPERIORES GERAL", children: "MEMBROS SUPERIORES GERAL" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 93,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "INICIANTE 1", children: "INICIANTE 1" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 96,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "INICIANTE 2", children: "INICIANTE 2" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 97,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "INICIANTE 3", children: "INICIANTE 3" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 98,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "INICIANTE 4", children: "INICIANTE 4" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 99,
                  columnNumber: 27
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/cadastro.tsx",
              lineNumber: 67,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 101,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 60,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 59,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Field, { name: "semana", label: "Semana", children: ({ Label, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Label, { className: "form-label font-light inline-block  text-gray-400" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 110,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
            "select",
            {
              ...register("semana"),
              className: `rounded-md border-2 form-control block
                          w-full `,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "111", children: "treino 1 " }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 116,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "112", children: "treino 2" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 117,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "113", children: "treino 3" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 118,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "114", children: "treino 4" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 119,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "115", children: "treino 5" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 120,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "116", children: "treino 6" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 121,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "117", children: "Melhor de Todas" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 122,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "118", children: "Melhor de Todas 2" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 123,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "201", children: "Iniciante 1" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 124,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "202", children: "Iniciante 2" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 125,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "203", children: "Iniciante 3" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 126,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "204", children: "Iniciante 4" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 127,
                  columnNumber: 27
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/cadastro.tsx",
              lineNumber: 111,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 129,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 109,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 108,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 106,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Field, { name: "nome", label: "Exercicio", children: ({ Label, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Label, { className: "form-label font-light inline-block  text-gray-400" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 138,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
            "input",
            {
              type: "text",
              ...register("nome"),
              className: `rounded-md border-2 form-control block
                          w-full `
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cadastro.tsx",
              lineNumber: 139,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 145,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 137,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 136,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 134,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Field, { name: "repeticoes", label: "Repeti\xE7\xF5es", children: ({ Label, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "form-group ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Label, { className: "form-label font-light inline-block  text-gray-400" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 154,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
            "input",
            {
              type: "text",
              ...register("repeticoes"),
              className: `rounded-md border-2 form-control block
                          w-full `
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cadastro.tsx",
              lineNumber: 155,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 161,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 153,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 152,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 150,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Field, { name: "carga", label: "Carga", children: ({ Label, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "form-group ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Label, { className: "form-label font-light inline-block  text-gray-400" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 170,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
            "input",
            {
              type: "text",
              ...register("carga"),
              className: `rounded-md border-2 form-control block
                          w-full `
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cadastro.tsx",
              lineNumber: 171,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 177,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 169,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 168,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 166,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Field, { name: "obs", label: "Observa\xE7\xE3o", children: ({ Label, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "form-group ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Label, { className: "form-label font-light inline-block  text-gray-400" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 186,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
            "input",
            {
              type: "text",
              ...register("obs"),
              className: `rounded-md border-2 form-control block
                          w-full `
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cadastro.tsx",
              lineNumber: 187,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 193,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 185,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 184,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 182,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Field, { name: "video", label: "Video", children: ({ Label, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Label, { className: "form-label font-light inline-block  text-gray-400" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 202,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
            "select",
            {
              ...register("video"),
              className: `rounded-md border-2 form-control block
                          w-full `,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "", children: "Selecione a m\xE1quina" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 208,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "abd_declinado.gif", children: "Abdominal Declinado" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 209,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "abd_maquina.gif", children: "Abdominal M\xE1quina" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 212,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "agachamento.gif", children: "Agachamento" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 215,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "apoio.gif", children: "Apoio" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 216,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "apoio_pe_banco.gif", children: "Apoio P\xE9 no banco" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 217,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "barra_graviton.gif", children: "Barra no Graviton" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 220,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "cadeira_extensora.gif", children: "Cadeira Extensora" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 223,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "crucifixo_reto_alteres.gif", children: "Crucifixo reto com halteres" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 226,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "desenvolvimento_militar_sentado.gif", children: "Crucifixo Cross Over" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 229,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "crucifixo_halteres.gif", children: "Crucifixo com Halteres" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 232,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "crucifixo_invertido_maquina.gif", children: "Crucifixo Invertido M\xE1quina" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 235,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "crucifixo_cross_over.gif", children: "Desenvolvimento Militar Sentado" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 238,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "desenvolvimento_halteres.gif", children: "Desenvolvimento com Halteres" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 241,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "desenvolvimento_maquina.gif", children: "Desenvolvimento M\xE1quina" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 244,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "elevacao_lateral_curvado.gif", children: "Eleva\xE7\xE3o Lateral Curvado" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 247,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "elevacao_frontal_alternado_sentado.gif", children: "Eleva\xE7\xE3o Frontal Alternado Sentado" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 250,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "elevacao_lateral.gif", children: "Eleva\xE7\xE3o Lateral" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 253,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "flying_reto_alternado.gif", children: "Flying Reto Alternado" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 256,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "levantamento_terra.gif", children: "Levantamento Terra" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 259,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "leg_45.gif", children: "Leg 45\xBA" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 262,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "leg_horizontal.gif", children: "Leg Horizontal" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 263,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "martelo_alternado.gif", children: "Martelo Alternado" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 266,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "paralela_maquina.gif", children: "Paralela M\xE1quina" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 269,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "pulldown_articulado.gif", children: "Pull Down Articulado" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 272,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "pulldown_barra.gif", children: "Pull Down com Barra" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 275,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "puxador_frente.gif", children: "Puxador Frente" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 278,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "remada_alta_barra.gif", children: [
                  "Remada Alta com Barra",
                  " "
                ] }, void 0, !0, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 281,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "remada_sentada_triangulo.gif", children: "Remada Sentada com Triangulo" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 284,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "rosca_direta_w.gif", children: "Rosca Direta Barra 'W'" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 287,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "rosca_testa_halteres.gif", children: "Rosca Testa Halteres" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 290,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "rosca_francesa_halteres.gif", children: "Rosca Francesa Halteres" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 294,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "rosca_testa_barra.gif", children: "Rosca Testa com Barra" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 297,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "supino_maquina.gif", children: "Supino M\xE1quina" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 301,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "supino_inclinado.gif", children: "Supino Inclinado" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 304,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "supino_reto.gif", children: "Supino Reto" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 307,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "triceps_pulley_barra.gif", children: "Triceps Pulley com Barra" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 308,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "triceps_pulley_corda.gif", children: "Triceps Pulley com Corda" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 311,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "triceps_pulley_unilateral.gif", children: "Triceps Pulley Unilateral" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 314,
                  columnNumber: 27
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/cadastro.tsx",
              lineNumber: 203,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 318,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 201,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 200,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 198,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Errors, {}, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 323,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
          Button2,
          {
            type: "submit",
            className: "rounded-xl w-32 bg-green-600 px-3 py-2 text-white font-semibold hover:bg-green-800",
            children: transition.state === "submitting" ? "Cadastrando..." : "Cadastrar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 325,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/cadastro.tsx",
        lineNumber: 56,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/cadastro.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/cadastro.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cadastro.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react37.Outlet, {}, void 0, !1, {
      fileName: "app/routes/cadastro.tsx",
      lineNumber: 343,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cadastro.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

// app/routes/especial.tsx
var especial_exports = {};
__export(especial_exports, {
  default: () => Especial,
  loader: () => loader19
});

// app/components/ui/avatar.tsx
var React7 = __toESM(require("react")), AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"));
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime"), Avatar = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/avatar.tsx",
    lineNumber: 10,
    columnNumber: 3
  },
  this
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square  h-full w-full", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/avatar.tsx",
    lineNumber: 25,
    columnNumber: 3
  },
  this
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/avatar.tsx",
    lineNumber: 37,
    columnNumber: 3
  },
  this
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// app/routes/especial.tsx
var import_node30 = require("@remix-run/node"), import_react38 = require("@remix-run/react"), import_date_fns5 = require("date-fns"), import_lodash7 = __toESM(require("lodash")), import_react_chartjs_2 = require("react-chartjs-2"), import_auto = require("chart.js/auto");
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime"), loader19 = async ({ request, params }) => {
  var _a;
  let session = await getSession(request.headers.get("Cookie"));
  if (!((_a = session.get("aluno")) == null ? void 0 : _a.id))
    return session.set("aluno", {
      red: "/aluno"
    }), (0, import_node30.redirect)("/login", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  let grupos = await getGrupos(), historicoTreinos = await getHistoricoSemana();
  return (0, import_node30.json)({ grupos, historicoTreinos });
};
function Especial() {
  let { grupos, historicoTreinos } = (0, import_react38.useLoaderData)();
  function treinosFeitos(aluno) {
    let treinos = import_lodash7.default.filter(historicoTreinos, { aluno }), treinosFiltered = import_lodash7.default.flatten(treinos.map((t) => t.treinos));
    return import_lodash7.default.filter(treinosFiltered, {
      semana: (0, import_date_fns5.getWeek)(new Date())
    }).length;
  }
  let semanas1 = numeroSemanas(
    grupos.map((g) => g.inicio)[0],
    grupos.map((g) => g.fim)[0]
  );
  function treinosFeitosTotal(aluno) {
    let treinos = import_lodash7.default.filter(historicoTreinos, { aluno }), treinosFiltered = import_lodash7.default.flatten(treinos.map((t) => t.treinos));
    return import_lodash7.default.filter(
      treinosFiltered,
      (v) => import_lodash7.default.includes(semanas1, v.semana)
    ).length;
  }
  function treinosFeitosPeriodo(aluno, data2) {
    let treinos = import_lodash7.default.filter(historicoTreinos, { aluno }), treinosFiltered = import_lodash7.default.flatten(treinos.map((t) => t.treinos));
    return import_lodash7.default.filter(treinosFiltered, {
      semana: data2
    }).length;
  }
  function pontosGrupo(nome, data2) {
    let treinos = import_lodash7.default.filter(grupos, { nome }).map(
      (a) => a.alunos.map((b) => treinosFeitosPeriodo(b.idMember, data2))
    ), pontuar = import_lodash7.default.flatten(treinos).length * 3;
    return import_lodash7.default.sum(import_lodash7.default.flatten(treinos)) - pontuar >= 0 ? 1 : 0;
  }
  function somaTreinosGrupo(nome) {
    let treinos = import_lodash7.default.filter(grupos, { nome }).map(
      (a) => a.alunos.map((b) => treinosFeitos(b.idMember))
    );
    return import_lodash7.default.sum(import_lodash7.default.flatten(treinos));
  }
  function numeroSemanas(inicio, fim) {
    let ini = (0, import_date_fns5.getWeek)(new Date(inicio)), final = (0, import_date_fns5.getWeek)(new Date(fim)), weeks = [];
    for (let i = ini; i <= final; i++)
      weeks.push(i);
    return weeks;
  }
  function totalGrupos(grupo) {
    let tot = numeroSemanas(
      grupos.map((g) => g.inicio)[0],
      grupos.map((g) => g.fim)[0]
    ).map((s) => pontosGrupo(grupo, s));
    return import_lodash7.default.sum(tot);
  }
  function pontosSemana(grupo) {
    let tot = numeroSemanas(
      grupos.map((g) => g.inicio)[0],
      grupos.map((g) => g.fim)[0]
    ).map((s) => pontosGrupo(grupo, s));
    return import_lodash7.default.map(tot, function(value, key) {
      return {
        semana: key + 1,
        pontos: value
      };
    });
  }
  let gruposGraficoSemana = Object.fromEntries(
    grupos.map((g) => [g.nome, pontosSemana(g.nome)])
  ), gruposGrafico = Object.fromEntries(
    grupos.map((g) => [g.nome, totalGrupos(g.nome)])
  );
  var pontosem = import_lodash7.default.map(gruposGraficoSemana, function(value, key) {
    return {
      name: key,
      pontos: value
    };
  });
  let colors = [
    "orange",
    "#0088FE",
    "#FF8042",
    "#FFBB28",
    "#00C49F",
    "pink",
    "blue"
  ];
  var output = import_lodash7.default.map(gruposGrafico, function(value, key) {
    return {
      name: key,
      pontos: value,
      fill: colors[key.slice(-1)]
    };
  });
  import_auto.Chart.register(
    import_auto.CategoryScale,
    import_auto.LinearScale,
    import_auto.PointElement,
    import_auto.BarElement,
    import_auto.LineElement,
    import_auto.Title
  );
  let TotlTreinosAlunos = import_lodash7.default.flatten(
    grupos.map(
      (g) => g.alunos.map((a) => ({
        nome: a.nome,
        treinos: treinosFeitosTotal(a.idMember)
      }))
    )
  ), cores = [];
  for (let i = 0; i < 40; i++) {
    let randomColor = `hsla(${~~(430 * Math.random())}, 70%,  72%, 0.8)`;
    cores.push(randomColor);
  }
  let labelsAlunos = TotlTreinosAlunos.map((o) => o.nome.split(" ")[0]), totalAlunos = TotlTreinosAlunos.map((o) => o.treinos), dataAlunos = {
    labels: labelsAlunos,
    datasets: [
      {
        label: "Total de Pontos",
        data: totalAlunos,
        axis: "y",
        backgroundColor: cores
      }
    ]
  }, dataLine = {
    labels: ["Total"],
    datasets: output.map((o) => ({
      label: o.name,
      data: [o.pontos]
    }))
  }, data = {
    labels: semanas1,
    datasets: pontosem.map((p) => ({
      label: p.name,
      data: p.pontos.map((v) => v.pontos)
    }))
  }, optionsBar = {
    plugins: {
      title: {
        display: !0,
        text: "Pontos por semana"
      }
    },
    scales: {
      x: {
        min: 0,
        max: 4
      }
    },
    ticks: {
      stepSize: 1
    },
    responsive: !0
  }, optionsBarTotal = {
    plugins: {
      title: {
        display: !0,
        text: "Pontos Totais"
      }
    },
    scales: {
      x: {
        min: 0,
        max: 4
      }
    },
    ticks: {
      stepSize: 1
    },
    responsive: !0
  }, optionsBarAlunos = {
    indexAxis: "y",
    plugins: {
      title: {
        display: !0,
        text: "Pontos por Aluno"
      }
    },
    scales: {
      y: {
        ticks: {
          display: !0
        }
      }
    },
    ticks: {
      stepSize: 1
    },
    responsive: !0
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_jsx_dev_runtime38.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: " mt-4 p-2 md:container grid gap-3 grid-cols-1 md:grid-cols-3", children: [
    grupos.map((g, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Card, { className: "overflow-hidden shadow-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardTitle, { className: " bg-gradient-to-r from-transparent via-stone-300 space-x-5 to-transparent mb-3 font-normal items-center  place-content-center flex ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex  font-light items-center ", children: g.nome }, void 0, !1, {
          fileName: "app/routes/especial.tsx",
          lineNumber: 292,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
          Separator,
          {
            orientation: "vertical",
            className: "  h-4 border border-white "
          },
          void 0,
          !1,
          {
            fileName: "app/routes/especial.tsx",
            lineNumber: 293,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex text-base space items-center font-light space-x-4   gap-2  pb-1 pt-1 p-3 ", children: [
          "PONTOS",
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: " text-lg font-semibold", children: totalGrupos(g.nome) }, void 0, !1, {
            fileName: "app/routes/especial.tsx",
            lineNumber: 299,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/especial.tsx",
          lineNumber: 297,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/especial.tsx",
        lineNumber: 291,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex items-center place-content-center mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex text-blue-600  font-extralight gap-2", children: [
        "Treinos - ",
        somaTreinosGrupo(g.nome),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
          Separator,
          {
            orientation: "vertical",
            className: "  h-4 border border-stone-300 "
          },
          void 0,
          !1,
          {
            fileName: "app/routes/especial.tsx",
            lineNumber: 308,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/especial.tsx",
          lineNumber: 307,
          columnNumber: 17
        }, this),
        " ",
        g.alunos.length * 3
      ] }, void 0, !0, {
        fileName: "app/routes/especial.tsx",
        lineNumber: 305,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/especial.tsx",
        lineNumber: 304,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardContent, { className: "grid gap-6", children: g.alunos.map((a, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
        "div",
        {
          className: "flex items-center justify-between space-x-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Avatar, { className: " w-14 h-14", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
                  AvatarImage,
                  {
                    className: "object-cover",
                    src: a.photo,
                    alt: "avatar"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/especial.tsx",
                    lineNumber: 323,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(AvatarFallback, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("img", { src: "/user.png", alt: "avatar" }, void 0, !1, {
                  fileName: "app/routes/especial.tsx",
                  lineNumber: 329,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/routes/especial.tsx",
                  lineNumber: 328,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/especial.tsx",
                lineNumber: 322,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("p", { className: "text-sm font-medium leading-none", children: a.nome.split(" ")[0] }, void 0, !1, {
                  fileName: "app/routes/especial.tsx",
                  lineNumber: 333,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("p", { className: "text-sm font-extralight text-muted-foreground", children: a.nome.substr(a.nome.indexOf(" ") + 1) }, void 0, !1, {
                  fileName: "app/routes/especial.tsx",
                  lineNumber: 336,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/especial.tsx",
                lineNumber: 332,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/especial.tsx",
              lineNumber: 321,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "w-12 bg-gray-200  rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
              "div",
              {
                className: `${treinosFeitos(a.idMember) >= 3 ? "bg-green-400" : treinosFeitos(a.idMember) === 2 ? "bg-amber-400" : treinosFeitos(a.idMember) === 0 ? "bg-slate-200" : "bg-red-400"}  rounded-full p-0.5 text-center text-xs font-medium leading-none text-primary-100`,
                style: {
                  width: treinosFeitos(a.idMember) > 3 || treinosFeitos(a.idMember) === 0 ? "100%" : treinosFeitos(a.idMember) * 33.333 + "%"
                },
                children: treinosFeitos(a.idMember) > 0 ? treinosFeitos(a.idMember) : ""
              },
              void 0,
              !1,
              {
                fileName: "app/routes/especial.tsx",
                lineNumber: 342,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/especial.tsx",
              lineNumber: 341,
              columnNumber: 19
            }, this)
          ]
        },
        index2,
        !0,
        {
          fileName: "app/routes/especial.tsx",
          lineNumber: 318,
          columnNumber: 17
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/especial.tsx",
        lineNumber: 316,
        columnNumber: 13
      }, this)
    ] }, g.id, !0, {
      fileName: "app/routes/especial.tsx",
      lineNumber: 290,
      columnNumber: 11
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react_chartjs_2.Bar, { data: dataLine, options: optionsBarTotal }, void 0, !1, {
      fileName: "app/routes/especial.tsx",
      lineNumber: 373,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/especial.tsx",
      lineNumber: 372,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react_chartjs_2.Bar, { data, options: optionsBar }, void 0, !1, {
      fileName: "app/routes/especial.tsx",
      lineNumber: 376,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/especial.tsx",
      lineNumber: 375,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
      import_react_chartjs_2.Bar,
      {
        data: dataAlunos,
        options: optionsBarAlunos
      },
      void 0,
      !1,
      {
        fileName: "app/routes/especial.tsx",
        lineNumber: 379,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/especial.tsx",
      lineNumber: 378,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/especial.tsx",
    lineNumber: 288,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/especial.tsx",
    lineNumber: 287,
    columnNumber: 5
  }, this);
}

// app/routes/indexold.tsx
var indexold_exports = {};
__export(indexold_exports, {
  default: () => Index7,
  loader: () => loader20
});
var import_fa13 = require("react-icons/fa");
var import_node31 = require("@remix-run/node");
var import_react39 = require("@remix-run/react"), import_jsx_dev_runtime39 = require("react/jsx-dev-runtime"), loader20 = async ({ request }) => {
  let TodasAulas = await getAulas();
  return (0, import_node31.json)({ TodasAulas });
};
function Index7() {
  let { TodasAulas } = (0, import_react39.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_jsx_dev_runtime39.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "h-80 xl:h-5/6 w-full bg-gradient-to-tl from-black to-orange-500 relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
        "img",
        {
          alt: "content",
          className: "w-full h-full object-cover absolute mix-blend-overlay ",
          src: "/fundo_novo.jpg"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/indexold.tsx",
          lineNumber: 19,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "pt-10 xl:pt-20 xl:pl-10 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h2", { className: "text-4xl xl:text-6xl font-extrabold shadow-xl text-white md:text-3xl", children: "Quattor Academia" }, void 0, !1, {
          fileName: "app/routes/indexold.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "text-md xl:text-2xl font-bold text-white ", children: "Jornada de Resultados Reais" }, void 0, !1, {
          fileName: "app/routes/indexold.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/indexold.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: " pl-32 pt-8 flex justify-end items-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
        "img",
        {
          alt: "logo",
          src: "/15anos.svg",
          className: "mt-10 w-60 xl:w-96 xl:mt-0  "
        },
        void 0,
        !1,
        {
          fileName: "app/routes/indexold.tsx",
          lineNumber: 34,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/indexold.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/indexold.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "bg-gradient-to-r from-[#2BC0E4] to-[#EAECC6]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "text-gray-600 body-font bg-no-repeat min-h-screen bg-contain bg-center bg-[url('/bola50.svg')]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "container mx-auto content-center  py-6 px-2 md:px-0 md:grid md:gap-x-6  md:gap-y-4 md:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "bg-white/75  py-6 mb-2 flex flex-col items-center rounded-lg  drop-shadow-2xl  min-h-96 max-h-96", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "flex  items-center mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_fa13.FaMapMarkedAlt, {}, void 0, !1, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 48,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 47,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h2", { className: "text-gray-900 text-lg title-font font-medium", children: "Onde Estamos" }, void 0, !1, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 50,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/indexold.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "text-center ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { className: "font-semibold", children: "Rua 5 Sul - \xC1guas Claras - DF" }, void 0, !1, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 56,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: " ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
              "a",
              {
                href: "https://wa.me/5561993190568",
                className: "mt-2  font-semibold inline-flex items-center ",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_fa13.FaWhatsapp, { className: "text-green-600 text-2xl mr-2 " }, void 0, !1, {
                    fileName: "app/routes/indexold.tsx",
                    lineNumber: 61,
                    columnNumber: 21
                  }, this),
                  "(61) 99319-0568"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/indexold.tsx",
                lineNumber: 58,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("a", { href: "https://wa.me/5561993190568", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("button", { className: "bg-green-400 tracking-tighter ml-5 px-2 py-1  text-white inline-flex items-center space-x-2 rounded", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_fa13.FaWhatsapp, {}, void 0, !1, {
                fileName: "app/routes/indexold.tsx",
                lineNumber: 66,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("span", { children: "Aula experimental" }, void 0, !1, {
                fileName: "app/routes/indexold.tsx",
                lineNumber: 67,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/indexold.tsx",
              lineNumber: 65,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/indexold.tsx",
              lineNumber: 64,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 57,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/indexold.tsx",
          lineNumber: 55,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "flex mt-10  items-center mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "w-8 h-8  mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_fa13.FaClock, {}, void 0, !1, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 74,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h2", { className: "text-gray-900 text-lg title-font font-medium", children: "Hor\xE1rio de Funcionamento" }, void 0, !1, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/indexold.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "flex-grow text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { className: "leading-relaxed ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("span", { className: " text-gray-900 ", children: "Segunda a Sexta:" }, void 0, !1, {
              fileName: "app/routes/indexold.tsx",
              lineNumber: 82,
              columnNumber: 19
            }, this),
            " ",
            "6:00h \xE0s 23:00h"
          ] }, void 0, !0, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { className: "leading-relaxed  ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("span", { className: " text-gray-900 ", children: "S\xE1bados e Feriados:" }, void 0, !1, {
              fileName: "app/routes/indexold.tsx",
              lineNumber: 86,
              columnNumber: 19
            }, this),
            " ",
            "8:00h \xE0s 12:00h"
          ] }, void 0, !0, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { className: "leading-relaxed  ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("span", { className: " text-gray-900 ", children: "Domingos:" }, void 0, !1, {
              fileName: "app/routes/indexold.tsx",
              lineNumber: 90,
              columnNumber: 19
            }, this),
            " 8:00h \xE0s 12:00h"
          ] }, void 0, !0, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 89,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/indexold.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/indexold.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "bg-white/75 overflow-auto rounded-lg mb-2  max-h-96  min-h-96 col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(Aulas, { aulas: TodasAulas }, void 0, !1, {
        fileName: "app/routes/indexold.tsx",
        lineNumber: 96,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/indexold.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("video", { controls: !0, poster: "/como.jpg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("source", { src: "/treino.mp4" }, void 0, !1, {
        fileName: "app/routes/indexold.tsx",
        lineNumber: 103,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/indexold.tsx",
        lineNumber: 102,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/indexold.tsx",
        lineNumber: 101,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/indexold.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/indexold.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/indexold.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/indexold.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/treinos.tsx
var treinos_exports = {};
__export(treinos_exports, {
  default: () => Treino8,
  loader: () => loader21
});
var import_node32 = require("@remix-run/node");
var import_date_fns6 = require("date-fns"), import_react40 = require("@remix-run/react"), import_fa14 = require("react-icons/fa"), import_jsx_dev_runtime40 = require("react/jsx-dev-runtime"), loader21 = async ({ request }) => {
  let par = new URL(request.url).searchParams.get("semana_query"), parametro = par ? parseInt(par) : (0, import_date_fns6.getWeek)(new Date()), treinos = await getTreinos2(parametro);
  return (0, import_node32.json)({ treinos });
};
function Treino8() {
  var _a;
  let semana = (0, import_react40.useFetcher)(), { treinos } = (0, import_react40.useLoaderData)(), treinoSemana = (_a = semana.data) != null && _a.treinos ? semana.data.treinos : treinos;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "w-full bg-stone-100 font-Roboto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex items-center flex-col space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h2", { className: "text-2xl font-extrabold text-slate-700", children: "Lista de Treinos" }, void 0, !1, {
        fileName: "app/routes/treinos.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(semana.Form, { method: "get", action: ".", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
        "select",
        {
          name: "semana_query",
          onChange: (event) => semana.submit(event.target.form),
          className: "rounded-md border-2 form-control block",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "01", children: "01 - (01/01 a 07/01)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "02", children: "02 - (08/01 a 14/01)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 37,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "03", children: "03 - (15/01 a 21/01)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 38,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "04", children: "04 - (22/01 a 28/01)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 39,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "05", children: "05 - (29/01 a 04/02)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 40,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "06", children: "06 - (05/02 a 11/02)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 41,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "07", children: "07 - (12/02 a 18/02)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 42,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "08", children: "08 - (19/02 a 25/02)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 43,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "09", children: "09 - (26/02 a 04/03)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 44,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "10", children: "10 - (05/02 a 11/03)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 45,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "11", children: "11 - (12/03 a 18/03)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 46,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "12", children: "12 - (19/03 a 25/03)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 47,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "13", children: "13 - (26/03 a 01/04)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 48,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "14", children: "14 - (02/04 a 08/04)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 49,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "15", children: "15 - (09/04 a 15/04)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 50,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "16", children: "16 - (16/04 a 22/04)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 51,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "17", children: "17 - (23/04 a 29/04)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 52,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "18", children: "18 - (30/04 a 06/05)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 53,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "19", children: "19 - (30/04 a 06/05)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 54,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "20", children: "20 - (07/05 a 13/05)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 55,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "21", children: "21 - (14/05 a 20/05)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 56,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "22", children: "22 - (21/05 a 27/05)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 57,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "23", children: "23 - (28/05 a 03/06)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 58,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "24", children: "24 - (04/06 a 10/06)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 59,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "25", children: "25 - (11/06 a 17/06)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 60,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "26", children: "26 - (18/06 a 24/06)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 61,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "27", children: "27 - (25/06 a 01/07)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 62,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "28", children: "28 - (02/07 a 08/07)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 63,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "29", children: "29 - (09/07 a 15/07)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 64,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "30", children: "30 - (16/07 a 22/07)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 65,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "31", children: "31 - (23/07 a 29/07)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 66,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "32", children: "32 - (06/07 a 12/07)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 67,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "33", children: "33 - (13/08 a 19/08)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 68,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "34", children: "34 - (20/08 a 26/08)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 69,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "35", children: "35 - (27/08 a 02/09)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 70,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "36", children: "36 - (03/09 a 09/09)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 71,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "37", children: "37 - (10/09 a 16/09)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 72,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "38", children: "38 - (17/09 a 23/08)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 73,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "39", children: "39 - (24/09 a 30/08)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 74,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "40", children: "40 - (01/10 a 07/10)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 75,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "41", children: "41 - (08/10 a 14/10)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 76,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "42", children: "42 - (15/10 a 21/10)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 77,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "43", children: "43 - (22/10 a 28/10)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 78,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "44", children: "44 - (29/10 a 04/11)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 79,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "45", children: "45 - (05/11 a 11/11)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 80,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "46", children: "46 - (12/11 a 18/11)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 81,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "47", children: "47 - (19/11 a 25/11)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 82,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "48", children: "48 - (26/11 a 02/12)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 83,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "49", children: "49 - (03/12 a 09/12)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 84,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "50", children: "50 - (10/12 a 16/12)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 85,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "51", children: "51 - (17/12 a 23/12)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 86,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "52", children: "52 - (24/12 a 30/12)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 87,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/treinos.tsx",
          lineNumber: 32,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/treinos.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/treinos.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "container mx-auto content-center  py-6 px-2 md:px-0 md:grid md:gap-x-6  md:gap-y-4 md:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "overflow-x-auto relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("table", { className: "w-full  text-sm text-left text-gray-500 dark:text-gray-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("thead", { className: "text-xs  text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("tr", { className: "rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("th", { scope: "col", className: " ", children: "Grupo" }, void 0, !1, {
            fileName: "app/routes/treinos.tsx",
            lineNumber: 96,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("th", { scope: "col", className: "text-center ", children: "Semana" }, void 0, !1, {
            fileName: "app/routes/treinos.tsx",
            lineNumber: 99,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/treinos.tsx",
          lineNumber: 95,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/treinos.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("tbody", { children: treinoSemana.map((treino) => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("tr", { className: " dark:bg-gray-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("th", { className: "py-1 flex gap-x-2 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white", children: treino.grupo }, void 0, !1, {
            fileName: "app/routes/treinos.tsx",
            lineNumber: 111,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("td", { className: " text-center", children: treino.semana }, void 0, !1, {
            fileName: "app/routes/treinos.tsx",
            lineNumber: 114,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("td", { className: "  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_react40.Link, { to: `${treino.id}`, className: "text-sky-600 text-lg ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_fa14.FaListAlt, {}, void 0, !1, {
            fileName: "app/routes/treinos.tsx",
            lineNumber: 118,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/treinos.tsx",
            lineNumber: 116,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/treinos.tsx",
            lineNumber: 115,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("td", { className: "  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
            import_react40.Link,
            {
              to: `/print/${treino.id}`,
              className: "text-orange-400 text-lg ",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_fa14.FaPrint, {}, void 0, !1, {
                fileName: "app/routes/treinos.tsx",
                lineNumber: 125,
                columnNumber: 23
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 122,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/treinos.tsx",
            lineNumber: 121,
            columnNumber: 19
          }, this)
        ] }, treino.id, !0, {
          fileName: "app/routes/treinos.tsx",
          lineNumber: 110,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/treinos.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/treinos.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/treinos.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "col-span-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h2", { className: " font-semibold text-center text-slate-700", children: "Lista de Exerc\xEDcios" }, void 0, !1, {
          fileName: "app/routes/treinos.tsx",
          lineNumber: 134,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_react40.Outlet, {}, void 0, !1, {
          fileName: "app/routes/treinos.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/treinos.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/treinos.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/treinos.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index8,
  loader: () => loader22
});
var import_node33 = require("@remix-run/node"), import_react41 = require("@remix-run/react");
var import_fa15 = require("react-icons/fa"), import_md = require("react-icons/md");
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime"), loader22 = async ({ request }) => {
  let TodasAulas = await getAulas();
  return (0, import_node33.json)({ TodasAulas });
};
function Index8() {
  let { TodasAulas } = (0, import_react41.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "grid md:container  w-[97%]  mx-auto mt-1  grid-cols-12 gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "bg-stone-200 hidden md:rounded-lg md:block shadow-sm md:h-[523px] md:row-span-2 md:col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "flex flex-col text-center  ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("h1", { className: "font-bold text-3xl text-stone-800 mt-[104px]", children: "Funcionamento" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "  font-semibold text-2xl mt-[59px] text-stone-800", children: "Seg \xE0 sex" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: " text-2xl  text-stone-600", children: "6h \xE0s 23h" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: " font-semibold text-2xl mt-[59px] text-stone-800", children: "sab / dom / Feriados" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 34,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: " text-2xl  text-stone-600", children: "8h \xE0s 12h" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 37,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "col-span-12 rounded-lg md:h-[523px] md:row-span-2 md:col-span-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
        "img",
        {
          src: "/assets/capa.jpg",
          alt: "background",
          className: " object-cover w-full  h-[212px] md:h-[523px] md:w-full rounded-lg "
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 43,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
        "img",
        {
          src: "/assets/capasombra.svg",
          alt: "logo",
          className: "w-1/2 -mt-[136px]  ml-48 md:ml-48  md:w-1/2 md:-mt-[210px]  "
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 49,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: " hidden md:block md:bg-stone-200 md:rounded-lg md:shadow-sm md:h-[340px] md:row-span-1 md:col-span-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "flex flex-col text-center  ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("h1", { className: " font-medium text-4xl text-stone-800 mt-14", children: "Contatos" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
        "a",
        {
          href: "https://wa.me/5561993190568",
          className: "mt-8 text-3xl inline-flex items-center  text-stone-800  ",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_fa15.FaWhatsapp, { className: "text-orange-400 text-5xl mr-2  " }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 68,
              columnNumber: 15
            }, this),
            "(61) 99319-0568"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 65,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: " font-bold text-slate-800 text-lg", children: "RUA 5 SUL - \xC1GUAS CLARAS" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "inline-flex items-center place-content-center space-x-8 mt-8 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("a", { href: "https://www.instagram.com/quattor_academia/#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_fa15.FaInstagram, { className: " text-5xl text-stone-400" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("a", { href: "mailto:recepcao@quattoracademia.com.br", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_md.MdOutlineAlternateEmail, { className: " text-5xl text-stone-400" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "md:hidden bg-stone-200 rounded-lg mt-2 mb-2 col-span-6  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "flex flex-col text-center  mb-4 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("h1", { className: "font-bold text-xl text-stone-800 mt-4", children: "Funcionamento" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "  font-semibold text-lg mt-4 text-stone-800", children: "Seg \xE0 sex" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: " text-lg  text-stone-600", children: "6h \xE0s 23h" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: " font-semibold text-lg mt-4 text-stone-800", children: "sab / dom / Feriados" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 96,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: " text-lg  text-stone-600", children: "8h \xE0s 12h" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 99,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "md:hidden bg-stone-200 rounded-lg mt-2 mb-2 shadow-sm  col-span-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "flex flex-col text-center  ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("h1", { className: " font-bold text-xl text-stone-800  mt-4", children: "Contatos" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
          "a",
          {
            href: "https://wa.me/5561993190568",
            className: "mt-2 text-lg inline-flex items-center  text-stone-800  ",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_fa15.FaWhatsapp, { className: "text-orange-400 text-xl mr-1  " }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 111,
                columnNumber: 15
              }, this),
              "(61) 99319-0568"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 108,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: " font-bold text-sm text-slate-800 ", children: "RUA 5 SUL - \xC1GUAS CLARAS" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 114,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
        "a",
        {
          href: "https://wa.me/5561993190568",
          className: "mt-2 inline-flex items-center  text-stone-800  ",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(Button, { className: " bg-orange-400 text-xl w-36", children: "Agendar" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 122,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 119,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "inline-flex items-center place-content-center space-x-8 mt-2 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("a", { href: "https://www.instagram.com/quattor_academia/#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_fa15.FaInstagram, { className: " text-3xl text-stone-400" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 127,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("a", { href: "mailto:recepcao@quattoracademia.com.br", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_md.MdOutlineAlternateEmail, { className: " text-3xl text-stone-400" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 130,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 125,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 105,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: " hidden md:block md:bg-stone-200 md:rounded-lg md:shadow-sm md:h-[174px] md:col-span-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "flex flex-col text-center  ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("h1", { className: " font-medium text-3xl text-stone-800 mt-8", children: "Agende uma aula" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 138,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
        "a",
        {
          href: "https://wa.me/5561993190568",
          className: "mt-8  inline-flex items-center  text-stone-800  ",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(Button, { className: " bg-orange-400 text-2xl  w-60", children: "Agendar" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 145,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 142,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 141,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "  col-span-12 md:flex bg-stone-50 border md:col-span-3 w-full items-center  justify-around  rounded-lg  p-3 shadow-3xl shadow-shadow-500 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "ml-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { className: "text-base font-medium text-orange-500 dark:text-white", children: "Muscula\xE7\xE3o" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { className: "mt-2 text-sm text-stone-800", children: "M\xE9todo exclusivo Treinos semanais" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 157,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 153,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
        "img",
        {
          className: "h-[110px] min-w-20   opacity-60 object-cover rounded-lg",
          src: "/assets/musculacao.jpg",
          alt: ""
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 162,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 161,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 152,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: " col-span-12  md:flex bg-stone-50 border md:col-span-3 w-full items-center  justify-around  rounded-lg  p-3 shadow-3xl shadow-shadow-500 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "ml-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { className: "text-base font-medium text-orange-500 dark:text-white", children: "Nata\xE7\xE3o Infantil" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 181,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { className: "mt-2 text-sm text-stone-800", children: "Piscina salinizada Piscina aquecida" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 184,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 180,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
        "img",
        {
          className: "h-[110px] w-40   opacity-60 object-cover rounded-lg",
          src: "/assets/natacao.jpg",
          alt: ""
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 189,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 188,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 179,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "hidden md:block md:col-span-6 md:row-span-2 md:bg-stone-200 md:rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "overflow-auto rounded-lg mb-2 max-h-[280px] ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(Aulas, { aulas: TodasAulas }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 199,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 198,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 197,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: " col-span-12  md:flex bg-stone-50 border md:col-span-3 w-full items-center  justify-around  rounded-lg  p-3 shadow-3xl shadow-shadow-500 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "ml-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { className: "text-base font-medium text-orange-500 dark:text-white", children: "Quattor Prime" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 205,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { className: "mt-2 w-[190px] md:w-[138px] text-sm text-stone-800", children: [
          "Est\xFAdio Personal",
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { children: "3 alunos por hor\xE1rio" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 210,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 208,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 204,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
        "img",
        {
          className: "h-[110px]  w-40    opacity-60 object-cover rounded-lg",
          src: "/assets/prime.jpg",
          alt: ""
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 214,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 213,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 203,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 202,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: " col-span-12 md:flex bg-stone-50 border md:col-span-3 w-full items-center  justify-around  rounded-lg  p-3 shadow-3xl shadow-shadow-500 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "ml-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { className: "text-base font-medium text-orange-500 dark:text-white", children: [
          "Ballet",
          " "
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 226,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { className: "mt-2 w-[190px] md:w-[138px] text-sm text-stone-800", children: [
          "Infantil",
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { children: " Adulto" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 231,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 229,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 225,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
        "img",
        {
          className: "h-[110px] w-40 opacity-60 object-cover rounded-lg",
          src: "/assets/ballet.jpg",
          alt: ""
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 235,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 234,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 224,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 223,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "] md:hidden col-span-12  bg-stone-200 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "overflow-auto rounded-lg mb-2 max-h-[280px] ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(Aulas, { aulas: TodasAulas }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 245,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 244,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 243,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/ballet.tsx
var ballet_exports = {};
__export(ballet_exports, {
  default: () => Ballet
});

// app/components/ui/tabs.tsx
var React8 = __toESM(require("react")), TabsPrimitive = __toESM(require("@radix-ui/react-tabs"));
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime"), Tabs = TabsPrimitive.Root, TabsList = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/tabs.tsx",
    lineNumber: 12,
    columnNumber: 3
  },
  this
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/tabs.tsx",
    lineNumber: 27,
    columnNumber: 3
  },
  this
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/tabs.tsx",
    lineNumber: 42,
    columnNumber: 3
  },
  this
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// app/routes/ballet.tsx
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime");
function Ballet() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_jsx_dev_runtime43.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex flex-col items-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
      "img",
      {
        src: "/belaweb.jpg",
        alt: "capa ballet",
        className: "w-full md:w-[600px] "
      },
      void 0,
      !1,
      {
        fileName: "app/routes/ballet.tsx",
        lineNumber: 15,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/ballet.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "md:container  flex place-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Tabs, { defaultValue: "historia", className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(TabsList, { className: "grid w-full grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(TabsTrigger, { value: "historia", children: "Hist\xF3ria" }, void 0, !1, {
          fileName: "app/routes/ballet.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(TabsTrigger, { value: "elenco", children: "Elenco" }, void 0, !1, {
          fileName: "app/routes/ballet.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ballet.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(TabsContent, { value: "historia", className: "container sm ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h2", { className: "scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0", children: "A Bela e a Fera" }, void 0, !1, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 30,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "leading-7 [&:not(:first-child)]:mt-2", children: 'Seja transportado para um mundo de magia e encanto com o ballet cl\xE1ssico "A Bela e a Fera". Descubra a hist\xF3ria emocionante, os personagens cativantes, os deslumbrantes figurinos e cen\xE1rios, e as principais cenas que tornam essa produ\xE7\xE3o \xFAnica.' }, void 0, !1, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 33,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "leading-7 [&:not(:first-child)]:mt-2", children: 'O ballet "A Bela e a Fera" \xE9 uma adapta\xE7\xE3o encantadora do conto de fadas cl\xE1ssico. Com coreografia elegante e m\xFAsica envolvente, o ballet traz \xE0 vida a hist\xF3ria de amor entre a Bela, uma jovem doce e corajosa, e a Fera, um pr\xEDncipe amaldi\xE7oado.' }, void 0, !1, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 39,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h2", { className: "scroll-m-20 border-b pb-1 text-lg font-semibold tracking-tight  transition-colors mt-3", children: "Pr\xF3logo" }, void 0, !1, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 45,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "leading-7 [&:not(:first-child)]:mt-4", children: [
            "Os convidados chegam ao castelo. O pr\xEDncipe e seus principais funcion\xE1rios est\xE3o l\xE1 para recepcionar cada convidado, afinal hoje \xE9 uma noite de festa no castelo. A festa come\xE7a com uma grande valsa. O pr\xEDncipe com seu mau-humor e arrog\xE2ncia, ap\xF3s muito custo, os funcion\xE1rios do castelo, conseguem convencer o pr\xEDncipe a se divertir no baile, e pelo menos tentar causar uma boa impress\xE3o ao reino.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "leading-7 mt-2", children: "Durante o baile, uma velha senhora usando capa adentra o baile sem ter sido convidada e oferece uma rosa aos convidados. Estes a ignoram, se afastam com medo e n\xE3o querem ser incomodados. O pr\xEDncipe percebe a confus\xE3o e vai ver o que est\xE1 acontecendo. A velha lhe oferece a flor e ele nega e pede que ela saia do castelo, pois apenas os nobres poderiam estar no baile. A velha ent\xE3o se revela, ao ver que o pr\xEDncipe valoriza apenas a beleza exterior e se transforma em um linda e poderosa feiticeira, deixando todos com medo da consequ\xEAncia dos seus atos. A feiticeira mostra a import\xE2ncia de n\xE3o julgar os outros pelas apar\xEAncias e ajudar sempre ao pr\xF3ximo, mesmo entre castas sociais diferentes. O Pr\xEDncipe tenta pedir desculpa por toda sua arrog\xE2ncia, por\xE9m ela nega o pedido." }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 56,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "leading-7 mt-2", children: "A feiticeira segura uma rosa que com o tempo vai se tornando maior e maior. Esta rosa brilhante ao passar dan\xE7ando entre os convidados os faz ficarem tontos e passando mal. O pr\xEDncipe fica temeroso pelo destino de todos! O feiti\xE7o est\xE1 fazendo efeito e transforma o seu melhor amigo e Maitre do castelo, Lumiere, em um candelabro, seu mordomo, Horloge em um rel\xF3gio, Babette, sua faxineira em um espanador, Madame Samovar, a governanta em um Bule. O pr\xEDncipe se desespera, por\xE9m tamb\xE9m come\xE7a a sentir um mal-estar s\xFAbito e desmaia! Ele levanta como uma fera e entra em desespero junto com os outros personagens. A Feiticeira explica o feiti\xE7o junto com a rosa e o deixa sozinho dizendo que ele tem at\xE9 o cair da \xFAltima p\xE9tala da rosa para encontrar uma pessoa de bom cora\xE7\xE3o que lhe ensine a apreciar a beleza interior, e que aceite se casar com ele." }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 71,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h2", { className: "scroll-m-20 border-b pb-1 text-lg font-semibold tracking-tight transition-colors mt-3", children: "Ato I - Vilarejo" }, void 0, !1, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "leading-7 [&:not(:first-child)]:mt-4", children: [
            "Todos acham Bela meio esquisita pois ela tem h\xE1bito de ler e de estudar.. Bela dan\xE7a com todos do vilarejo. Gaston e seus amigos encontram Bela. Eles tentam de todo modo impression\xE1-la: levantando as camponesas, mostrando for\xE7a e beleza, etc. Mas Bela os ignora e n\xE3o se interessa pelo que v\xEA. Gaston sai de cena e volta para junto de seus amigos, ele fica frustrado e muito bravo por ter tomado um fora. Todos observam sua tristeza por n\xE3o se sentir pertencente ao vilarejo e se questionam do porqu\xEA ela est\xE1 t\xE3o triste.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "leading-7 mt-2", children: "Todo vilarejo termina a feira dan\xE7ando e no final a Bela pega uma mala e decide ir embora do vilarejo rumo a uma viagem;" }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 102,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 92,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h2", { className: "scroll-m-20 border-b pb-1 text-lg font-semibold tracking-tight transition-colors mt-3", children: "Ato II - Floresta" }, void 0, !1, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "leading-7 [&:not(:first-child)]:mt-4", children: [
            "Bela Entra na Floresta e Ninfas a encontram e dan\xE7am junto com ela. Entra a rainha das ninfas para se apresentar e a rainha das ninfas dan\xE7am pra Bela. Ninfas dan\xE7am e Bela assiste. Bela fica sozinha e escuta as fadas da floresta retornando, elas dan\xE7am juntas e se divertem.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "leading-7 mt-2", children: "Enquanto Bela e as fadas se divertem, uma matilha de lobos aparecem e ataca Bela, enquanto as fadas giram ao redor da Bela, mas depois fogem quando a Fera aparece. Fera salva Bela e a carrega no colo e expulsando os lobos." }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 116,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 110,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h2", { className: "scroll-m-20 border-b pb-1 text-lg font-semibold tracking-tight transition-colors mt-3", children: "Ato III- Castelo" }, void 0, !1, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 123,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "leading-7 [&:not(:first-child)]:mt-4", children: [
            "Lumiere, Orloge, Babette e Mama bule dan\xE7am juntos dan\xE7am no castelo. A Fera chega da floresta, com a Bela no colo e entra no final da m\xFAsica com Bella no colo.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "leading-7 mt-2", children: "Quarteto Lumi\xE9re, Rel\xF3gio, Bule e Espanador apresentam-se \xE0 Bela depois dela tomar um grande susto e contam o que aconteceu. Brigam o tempo todo at\xE9 encontrarem uma explica\xE7\xE3o. O espanador limpa o castelo para o jantar e os mini espanadores dan\xE7am." }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 130,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "leading-7 mt-2", children: "O rel\xF3gio anuncia que haver\xE1 um jantar em pouco minutos. Os reloginhos anunciam a hora do Jantar. Lumiere, o candelabro chama todos para degustarem o jantar. Os mini candelabros dan\xE7am e criam um clima m\xE1gico no castelo. Os chefs confeiteiros tamb\xE9m chegam para o jantar e apresentam o Menu." }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 137,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "leading-7 mt-2" }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 144,
              columnNumber: 17
            }, this),
            "As mini x\xEDcaras de ch\xE1 anunciam a hora do ch\xE1. A fera presenteia Bela com um livro e ela percebe o quanto a fera \xE9 gentil enquanto mini x\xEDcaras anunciam a paix\xE3o que est\xE1 surgindo.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "leading-7 mt-2", children: "A Feiticeira e a Rosa quebram o feiti\xE7o , ja que a Bela e a Fera encontraram o amor verdadeiro. Fera vira principe e todos os personagens viram humanos novamente. A Bela e a Fera dancam uma linda valsa para celebrar esse momento especial e vivem felizes para sempre." }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 148,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 126,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ballet.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(TabsContent, { value: "elenco", className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 p-2 space-y-2 md:space-x-2  md:space-y-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/bela.jpg",
                  alt: "capa ballet",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 162,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 161,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-yellow-400", children: "A Bela" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 168,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 160,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Marina Coimbra " }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 173,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 172,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 159,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/vinicius.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 179,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 178,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "A Fera - Coreografo e Professor" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 185,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 177,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Vinicius Gomes " }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 190,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 189,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 176,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/lumiere.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 196,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 195,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-amber-500", children: "Lumiere (Candelabro)" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 202,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 194,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "J\xFAlia Carneiro " }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 207,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 206,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 193,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/relogio.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 214,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 213,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-purple-500", children: "Relogio (Orloge)" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 220,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 212,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Camila Silva Carneiro" }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 225,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 224,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 211,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/mama.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 232,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 231,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Mama Bule (Coreografa e Professora)" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 238,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 230,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Karitiana Teixeira" }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 243,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 242,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 229,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/espanadora.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 250,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 249,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Espanadora e Ninfa da Floresta" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 256,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 248,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Valentina Fuzo Fa\xE9 " }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 261,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 260,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 247,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/feiticeira.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 268,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 267,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Feiticeira" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 274,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 266,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "M\xEDriam Carneiro" }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 279,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 278,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 265,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/rosa.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 286,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 285,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Rosa e Camponesa" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 292,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 284,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Vivian Fujikawa " }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 297,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 296,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 283,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/gaston.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 304,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 303,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Gaston e Amigos" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 310,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 302,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Alvo Lopes" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 315,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Pedro Vieira" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 316,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Rosiane Mafra" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 317,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Caio Queiroz" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 318,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 314,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 301,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "camponesas.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 325,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 324,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Camponesas" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 331,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 323,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "B\xE1rbara Borges " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 336,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Oriane Graciani de Souza " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 337,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Silvana Aquino " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 338,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Ana Clara Cintra " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 339,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Vanessa Farias " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 340,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "J\xFAlia Sousa " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 341,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 335,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 322,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "damasdacorte.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 347,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 346,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Damas da Corte" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 353,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 345,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "B\xE1rbara Borges " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 358,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Oriane Graciani de Souza " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 359,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Silvana Aquino " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 360,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Ana Clara Cintra " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 361,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Vanessa Farias " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 362,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "J\xFAlia Sousa " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 363,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Rejane Fleury" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 364,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Renata Coelho Cardoso" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 365,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 357,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 344,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "triodecaponeses.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 372,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 371,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Trio de Camponeses" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 378,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 370,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Vivian Fujikawa " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 383,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "\xCDtalo Lorenzo " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 384,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "D\xE9bora Bezerra" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 385,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 382,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 369,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/damafloresta.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 392,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 391,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Damas da Corte" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 398,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 390,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Tha\xEDs Franco" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 403,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Marjhory Gon\xE7alves Moura" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 404,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Fl\xE1via Guimar\xE3es " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 405,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Lanuza O. Rocha Neves " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 406,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 402,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 389,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/ninfas.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 413,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 412,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Ninfas da Floresta" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 419,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 411,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Julia Nery" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 424,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Gabriela Alves Pereira " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 425,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Cristiana Santos Silva " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 426,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Marcelo Nazar\xE9 " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 427,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Claudia Alves " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 428,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 423,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 410,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/minifloristas.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 435,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 434,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Floristas" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 441,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 433,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Alice Silva Porto Xavier " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 446,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Ana Beatriz Rodrigues P\xE9rez Domingues" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 447,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Isabella Santos Barbosa F\xE9lix " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 448,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 445,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 432,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/minirosas.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 455,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 454,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Mini Rosas" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 461,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 453,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Lu\xEDza Ribeiro" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 466,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Let\xEDcia Jaime Mendes" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 467,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Ana Luiza Abrantes" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 468,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 465,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 452,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "chefsconfeiteiros.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 475,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 474,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Chefs confeiteiros" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 481,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 473,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "D\xE9bora Bezerra " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 486,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Mar\xEDlia Bonfim" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 487,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "\xCDtalo Lorenzo " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 488,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 485,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 472,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/candelabrinhos.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 495,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 494,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Candelabros" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 501,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 493,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Gabriela Frazao" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 506,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Helo\xEDsa Ferreira de Carvalho" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 507,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Ana Vitoria Timm Casagrande" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 508,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Maria Eduarda Mendes Takao" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 509,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Alice Carvalho" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 510,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Maria Fernanda Bastos Rizzo" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 511,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Larissa Carvalho de Oliveira Barquilha" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 512,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Rafaela Noleto Barbosa" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 513,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 505,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 492,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/miniespanadores.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 520,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 519,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Mini espanadores" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 526,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 518,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Stella Fontoura Bangoim " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 531,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "\xCDsis Sales de Cal\xE7ado tamanho " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 532,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Lis Sales de Cal\xE7ado " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 533,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 530,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 517,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/xicaras.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 540,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 539,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "X\xEDcaras" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 546,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 538,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Catarina Calegari Hollanda" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 551,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Laura Moschem Gon\xE7alves" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 552,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Sophia Raulino de Sousa" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 553,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Helena Melo de Oliveira " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 554,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 550,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 537,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/taverna.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 561,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 560,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Taverna" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 567,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 559,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Rosiane Mafra" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 573,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Maria Eduarda Matos " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 574,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Ane Derungs Stimamiglio" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 575,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Suzy Dourado" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 576,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Paloma Vieira" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 577,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Erika Terahata" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 578,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Vanessa Alves" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 579,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Nilde Serejo" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 580,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Alvo Lopes" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 581,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 572,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 558,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/reloginho_site.webp",
                  alt: "capa ballet",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 588,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 587,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-red-500", children: "Rel\xF3gios" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 594,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 586,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Antonella Silvestre Franca" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 599,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Clarisse" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 600,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Catarina Ferreira Garcia Nunes " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 601,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Catarina Ramos Ismael" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 602,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Isabella Koshevnikoff Zambelli Hampel " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 603,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Larissa Viana" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 604,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Manuela Antunes de Souza" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 605,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Ol\xEDvia de S\xE1 Andrade " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 606,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 598,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 585,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/fadas_floresta_web.webp",
                  alt: "capa ballet",
                  className: "w-full rounded-md shadow-md"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 612,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 611,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "  text-lg  font-medium text-green-500", children: "Fadas da Floresta" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 618,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 610,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Beatriz Ferreira " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 623,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Carolina Calgaro " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 624,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Clara de Mesquita Loures" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 625,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Elisa Dias" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 626,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Giovanna Mota " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 627,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Manuela Sim\xE3o" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 628,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "J\xFAlia Cec\xEDlio" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 629,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "J\xFAlia Luna" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 630,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Sofia Luiza Mafra " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 631,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 622,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 609,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/belaweb.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 638,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 637,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Lobos: Dan\xE7a contempor\xE2nea" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 644,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 636,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Eduarda Lameir\xE3o Guitton" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 649,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: " Ana Lu\xEDza Silveira Costa Pinto " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 650,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: " Beatriz Vilas B\xF4as Menon" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 651,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Stella Hadassa Ferreira Fran\xE7a " }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 652,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Camille Bionda Pereira Mendes" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 653,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Maria Clara Bai\xE3o Diniz de Souza Rodrigues" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 654,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 648,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 635,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/brenda.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 661,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 660,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Coreografa e Professora" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 667,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 659,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Brenda Aissa" }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 672,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 671,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 658,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/debora.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 679,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 678,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Coreografa e Professora" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 685,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 677,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Debora Simoes" }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 690,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 689,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 676,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Card, { className: "shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "img",
                {
                  src: "/warley1.jpg",
                  alt: "capa fera",
                  className: "w-full rounded-md  shadow-md "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/ballet.tsx",
                  lineNumber: 697,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 696,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardDescription, { className: "text-lg  font-medium text-blue-500", children: "Livreiro, Core\xF3grafo e Professor" }, void 0, !1, {
                fileName: "app/routes/ballet.tsx",
                lineNumber: 703,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 695,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(CardContent, { className: "text-sm grid grid-cols-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: "Warley Castro" }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 708,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/ballet.tsx",
              lineNumber: 707,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ballet.tsx",
            lineNumber: 694,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ballet.tsx",
          lineNumber: 158,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/ballet.tsx",
          lineNumber: 157,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ballet.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ballet.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/ballet.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ballet.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  loader: () => loader23
});
var import_node34 = require("@remix-run/node");
async function loader23({ request }) {
  let session = await getSession(request.headers.get("Cookie"));
  return (0, import_node34.redirect)("/", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action15,
  default: () => Index9,
  loader: () => loader24
});
var import_node35 = require("@remix-run/node"), import_react42 = require("@remix-run/react");
var import_lodash8 = __toESM(require("lodash")), import_im2 = require("react-icons/im");

// app/components/ui/alert.tsx
var React9 = __toESM(require("react")), import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime"), alertVariants = (0, import_class_variance_authority2.cva)(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&:has(svg)]:pl-11 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Alert = React9.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
  "div",
  {
    ref,
    role: "alert",
    className: cn(alertVariants({ variant }), className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert.tsx",
    lineNumber: 26,
    columnNumber: 3
  },
  this
));
Alert.displayName = "Alert";
var AlertTitle = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert.tsx",
    lineNumber: 39,
    columnNumber: 3
  },
  this
));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert.tsx",
    lineNumber: 51,
    columnNumber: 3
  },
  this
));
AlertDescription.displayName = "AlertDescription";

// app/routes/login.tsx
var import_react_icons3 = require("@radix-ui/react-icons");

// app/components/ui/toast.tsx
var React10 = __toESM(require("react")), import_react_icons2 = require("@radix-ui/react-icons"), ToastPrimitives = __toESM(require("@radix-ui/react-toast")), import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_dev_runtime45 = require("react/jsx-dev-runtime"), ToastProvider = ToastPrimitives.Provider, ToastViewport = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 14,
    columnNumber: 3
  },
  this
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = (0, import_class_variance_authority3.cva)(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Toast = React10.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
  ToastPrimitives.Root,
  {
    ref,
    className: cn(toastVariants({ variant }), className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 47,
    columnNumber: 5
  },
  this
));
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 60,
    columnNumber: 3
  },
  this
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react_icons2.Cross2Icon, { className: "h-4 w-4" }, void 0, !1, {
      fileName: "app/components/ui/toast.tsx",
      lineNumber: 84,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 75,
    columnNumber: 3
  },
  this
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold [&+div]:text-xs", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 93,
    columnNumber: 3
  },
  this
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 105,
    columnNumber: 3
  },
  this
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// app/components/ui/use-toast.ts
var React11 = __toESM(require("react")), TOAST_LIMIT = 1, TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  return count = (count + 1) % Number.MAX_VALUE, count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map(), addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId))
    return;
  let timeout = setTimeout(() => {
    toastTimeouts.delete(toastId), dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
}, reducer = (state, action17) => {
  switch (action17.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action17.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action17.toast.id ? { ...t, ...action17.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      let { toastId } = action17;
      return toastId ? addToRemoveQueue(toastId) : state.toasts.forEach((toast4) => {
        addToRemoveQueue(toast4.id);
      }), {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: !1
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      return action17.toastId === void 0 ? {
        ...state,
        toasts: []
      } : {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action17.toastId)
      };
  }
}, listeners = [], memoryState = { toasts: [] };
function dispatch(action17) {
  memoryState = reducer(memoryState, action17), listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast3({ ...props }) {
  let id = genId(), update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  }), dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  return dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: !0,
      onOpenChange: (open) => {
        open || dismiss();
      }
    }
  }), {
    id,
    dismiss,
    update
  };
}
function useToast() {
  let [state, setState] = React11.useState(memoryState);
  return React11.useEffect(() => (listeners.push(setState), () => {
    let index = listeners.indexOf(setState);
    index > -1 && listeners.splice(index, 1);
  }), [state]), {
    ...state,
    toast: toast3,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}

// app/components/ui/toaster.tsx
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime");
function Toaster3() {
  let { toasts } = useToast();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action: action17, ...props }) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(Toast, { ...props, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(ToastTitle, { children: title }, void 0, !1, {
            fileName: "app/components/ui/toaster.tsx",
            lineNumber: 20,
            columnNumber: 25
          }, this),
          description && /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(ToastDescription, { children: description }, void 0, !1, {
            fileName: "app/components/ui/toaster.tsx",
            lineNumber: 22,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ui/toaster.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        action17,
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(ToastClose, {}, void 0, !1, {
          fileName: "app/components/ui/toaster.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ] }, id, !0, {
        fileName: "app/components/ui/toaster.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this);
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(ToastViewport, {}, void 0, !1, {
      fileName: "app/components/ui/toaster.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/toaster.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime"), loader24 = async ({ request, params }) => {
  var _a, _b;
  let session = await getSession(request.headers.get("Cookie")), motivo = (_a = session.get("aluno")) == null ? void 0 : _a.motivo, url = (_b = session.get("aluno")) == null ? void 0 : _b.red;
  return motivo || url || null;
}, action15 = async ({ request }) => {
  let form = await request.formData(), matricula = form.get("matricula"), redi = form.get("redirectTo") || "/", aluno = (await getAluno(matricula))[0];
  console.log(aluno);
  let alunoGym = [];
  aluno.membershipStatus === "Inactive" && (alunoGym = (await getAlunoGym(Number(matricula))).map((a) => a.gympassId));
  let plano = import_lodash8.default.filter(aluno.memberships, { membershipStatus: "active" }).map(
    (n) => n.name
  );
  if (console.log(plano), !aluno.idMember)
    return {
      message: "Aluno n\xE3o encontrado"
    };
  if (aluno.membershipStatus === "Inactive" && alunoGym[0] === null)
    return {
      message: "Seu plano est\xE1 Inativo Favor procurar recep\xE7\xE3o"
    };
  console.log(aluno.membershipStatus, aluno.idMember, plano);
  let session = await getSession(request.headers.get("Cookie"));
  return session.set("aluno", {
    id: aluno.idMember,
    plano,
    status: aluno.membershipStatus
  }), (0, import_node35.redirect)(redi, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};
function Index9() {
  let transition = (0, import_react42.useTransition)(), data = (0, import_react42.useActionData)(), motivo = (0, import_react42.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "h-screen w-full bg-stone-100 font-Roboto ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "bg-stone-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "text-gray-600 body-font  min-h-screen ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "h-full   pt-20 items-center flex flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
      import_react42.Form,
      {
        method: "post",
        className: "rounded-2xl bg-white bg-opacity-80  p-4 md:w-1/2 lg:w1/4 w-11/12",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
            "input",
            {
              type: "hidden",
              value: motivo || "",
              name: "redirectTo"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 106,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("label", { htmlFor: "matricula", className: " font-semibold mb-9 ", children: "N\xFAmero de Matricula" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 112,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "relative  my-4 flex w-full flex-wrap items-stretch mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("span", { className: "z-10 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded-xl text-base items-center justify-center w-8 pl-3 py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_im2.ImEnter, {}, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 117,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 116,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
              "input",
              {
                type: "number",
                name: "matricula",
                required: !0,
                autoFocus: !0,
                placeholder: "Pegue seu n\xFAmero na recep\xE7\xE3o",
                className: "px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white  rounded-xl text-sm border shadow outline-none border-slate-200 focus:outline-none focus:ring w-full pl-10"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 119,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 115,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Toaster3, {}, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "w-full text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
              "button",
              {
                disabled: transition.state === "submitting" || transition.state === "loading",
                type: "submit",
                name: "Entrar",
                className: "" + transition.state == "loading" ? "rounded-xl mt-2  bg-blue-600 px-3 py-2 text-white font-semibold" : "rounded-xl mt-2  bg-stone-500 text-white px-3 py-2  font-semibold hover:bg-orange-400 hover:-translate-y-1",
                children: transition.state === "submitting" ? "Localizando..." : transition.state === "loading" ? "Carregando Aulas" : "Entrar"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 130,
                columnNumber: 17
              },
              this
            ),
            data && /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: " mt-3  p-1 bg-white rounded-lg ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Alert, { variant: "destructive", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_react_icons3.ExclamationTriangleIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/routes/login.tsx",
                lineNumber: 151,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(AlertTitle, { children: "Sem treino " }, void 0, !1, {
                fileName: "app/routes/login.tsx",
                lineNumber: 152,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(AlertDescription, { children: data.message }, void 0, !1, {
                fileName: "app/routes/login.tsx",
                lineNumber: 153,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/login.tsx",
              lineNumber: 150,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 149,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 129,
            columnNumber: 15
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 103,
        columnNumber: 13
      },
      this
    ),
    (motivo == null ? void 0 : motivo.motivo) && /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("p", { className: "  text-center text-md text-white font-medium px-4 py-3 bg-red-600 rounded-lg", children: motivo || "" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 161,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 102,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 101,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 100,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}

// app/routes/teste.tsx
var teste_exports = {};
__export(teste_exports, {
  action: () => action16,
  default: () => Grupocadastrado2,
  loader: () => loader25
});
var import_node36 = require("@remix-run/node"), import_react43 = require("@remix-run/react");
var import_fa16 = require("react-icons/fa"), import_jsx_dev_runtime48 = require("react/jsx-dev-runtime"), loader25 = async ({ request, params }) => await getExercicios(params.grupo), action16 = async ({ request, params }) => {
  let form = await request.formData(), nome = form.get("nome"), repeticoes = form.get("repeticoes"), carga = form.get("carga"), obs = form.get("obs"), execid = form.get("execid"), video = form.get("video"), _action = form.get("_action"), id = params.exe;
  return _action === "save" && await updateCadastroTreino(id, nome, repeticoes, carga, obs, execid, video), _action === "delete" && await deleteExercicio(id, execid), (0, import_node36.redirect)(`/treinos/${id}`);
};
function Grupocadastrado2() {
  let { exercicios } = (0, import_react43.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("ul", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "grid grid-cols-12 py-2 gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "col-span-4 font-light text-sm text-sky-500", children: "N\xFAmero" }, void 0, !1, {
        fileName: "app/routes/teste.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "col-span-4 font-light text-sm text-sky-500", children: "Nome" }, void 0, !1, {
        fileName: "app/routes/teste.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/teste.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    exercicios.map((exec, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("li", { className: "py-1  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_react43.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "grid grid-cols-12  gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("input", { type: "text", id: "index", defaultValue: index + 1 }, void 0, !1, {
        fileName: "app/routes/teste.tsx",
        lineNumber: 47,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
        "input",
        {
          hidden: !0,
          type: "text",
          id: "execid",
          name: "execid",
          defaultValue: exec.execid
        },
        void 0,
        !1,
        {
          fileName: "app/routes/teste.tsx",
          lineNumber: 48,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
        "input",
        {
          type: "text",
          id: "nome",
          name: "nome",
          defaultValue: exec.nome,
          className: "col-span-4 bg-stone-50 border-b-2 "
        },
        void 0,
        !1,
        {
          fileName: "app/routes/teste.tsx",
          lineNumber: 56,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
        "input",
        {
          type: "text",
          id: "carga",
          name: "carga",
          defaultValue: exec.carga,
          className: "col-span-2 bg-stone-50 border-b-2 "
        },
        void 0,
        !1,
        {
          fileName: "app/routes/teste.tsx",
          lineNumber: 64,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
        "input",
        {
          type: "text",
          id: "repeticoes",
          name: "repeticoes",
          defaultValue: exec.Repeticoes,
          className: "col-span-2 bg-stone-50 border-b-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/teste.tsx",
          lineNumber: 72,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
        "input",
        {
          type: "text",
          id: "obs",
          name: "obs",
          defaultValue: exec.obs,
          className: "col-span-3 text-sm bg-stone-50 border-b-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/teste.tsx",
          lineNumber: 80,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
        "input",
        {
          type: "text",
          id: "video",
          name: "video",
          defaultValue: exec.video,
          className: "col-span-3 text-sm bg-stone-50 border-b-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/teste.tsx",
          lineNumber: 87,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "grid justify-items-center grid-cols-2 gap2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
          "button",
          {
            className: "flex content-center text-green-500 bg-stone-100 ",
            type: "submit",
            name: "_action",
            value: "save",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_fa16.FaSave, {}, void 0, !1, {
              fileName: "app/routes/teste.tsx",
              lineNumber: 100,
              columnNumber: 19
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/teste.tsx",
            lineNumber: 95,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
          "button",
          {
            className: "flex content-center text-red-500 bg-stone-100 ",
            type: "submit",
            name: "_action",
            value: "delete",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_fa16.FaTrash, {}, void 0, !1, {
              fileName: "app/routes/teste.tsx",
              lineNumber: 107,
              columnNumber: 19
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/teste.tsx",
            lineNumber: 102,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/teste.tsx",
        lineNumber: 94,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/teste.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/teste.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this) }, exec.execid, !1, {
      fileName: "app/routes/teste.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this))
  ] }, void 0, !0, {
    fileName: "app/routes/teste.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "5d7349e5", entry: { module: "/build/entry.client-W3UIBV7P.js", imports: ["/build/_shared/chunk-LCO3JGZM.js", "/build/_shared/chunk-YNNQV7ZF.js", "/build/_shared/chunk-AJHKP2PA.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-V2WJRBRM.js", imports: ["/build/_shared/chunk-M4GS7GO6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: "_index", index: void 0, caseSensitive: void 0, module: "/build/routes/_index-H5KUVSLL.js", imports: ["/build/_shared/chunk-JF65S77Q.js", "/build/_shared/chunk-AZM7WYHQ.js", "/build/_shared/chunk-YJIYKFF5.js", "/build/_shared/chunk-BAOJAVQQ.js", "/build/_shared/chunk-OYFKMXR2.js", "/build/_shared/chunk-4QRBCJMT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno.$maquina": { id: "routes/aluno.$maquina", parentId: "root", path: "aluno/:maquina", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno.$maquina-LZZRZC5K.js", imports: ["/build/_shared/chunk-4QRBCJMT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno._index": { id: "routes/aluno._index", parentId: "root", path: "aluno/_index", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno._index-AX5WHYED.js", imports: ["/build/_shared/chunk-4CBDNLXM.js", "/build/_shared/chunk-O5B5HSOO.js", "/build/_shared/chunk-BEREJSYK.js", "/build/_shared/chunk-YYN7P63Y.js", "/build/_shared/chunk-O52AUTEI.js", "/build/_shared/chunk-5OBBRRGV.js", "/build/_shared/chunk-PAV5R4GA.js", "/build/_shared/chunk-BAOJAVQQ.js", "/build/_shared/chunk-OYFKMXR2.js", "/build/_shared/chunk-WTYGMOLF.js", "/build/_shared/chunk-WOFGNCAM.js", "/build/_shared/chunk-DFM3RCCF.js", "/build/_shared/chunk-4QRBCJMT.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno.baktreino": { id: "routes/aluno.baktreino", parentId: "root", path: "aluno/baktreino", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno.baktreino-PPMZ7YNO.js", imports: ["/build/_shared/chunk-WTYGMOLF.js", "/build/_shared/chunk-WOFGNCAM.js", "/build/_shared/chunk-DFM3RCCF.js", "/build/_shared/chunk-4QRBCJMT.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno.grupo": { id: "routes/aluno.grupo", parentId: "root", path: "aluno/grupo", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno.grupo-E4A3TY3U.js", imports: ["/build/_shared/chunk-6OKMA4MO.js", "/build/_shared/chunk-DRG2ZDRD.js", "/build/_shared/chunk-O52AUTEI.js", "/build/_shared/chunk-PAV5R4GA.js", "/build/_shared/chunk-AZM7WYHQ.js", "/build/_shared/chunk-YJIYKFF5.js", "/build/_shared/chunk-BAOJAVQQ.js", "/build/_shared/chunk-OYFKMXR2.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno.index_bak": { id: "routes/aluno.index_bak", parentId: "root", path: "aluno/index_bak", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno.index_bak-KIMMT2KZ.js", imports: ["/build/_shared/chunk-64A7QYJK.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/aluno.indexddd": { id: "routes/aluno.indexddd", parentId: "root", path: "aluno/indexddd", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno.indexddd-IRMEAT64.js", imports: ["/build/_shared/chunk-5OBBRRGV.js", "/build/_shared/chunk-PAV5R4GA.js", "/build/_shared/chunk-OYFKMXR2.js", "/build/_shared/chunk-WTYGMOLF.js", "/build/_shared/chunk-WOFGNCAM.js", "/build/_shared/chunk-DFM3RCCF.js", "/build/_shared/chunk-4QRBCJMT.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno.planejamento_bak": { id: "routes/aluno.planejamento_bak", parentId: "root", path: "aluno/planejamento_bak", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno.planejamento_bak-LN7Z3NMD.js", imports: ["/build/_shared/chunk-AZM7WYHQ.js", "/build/_shared/chunk-YJIYKFF5.js", "/build/_shared/chunk-BAOJAVQQ.js", "/build/_shared/chunk-OYFKMXR2.js", "/build/_shared/chunk-4QRBCJMT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno.spinning_bak": { id: "routes/aluno.spinning_bak", parentId: "root", path: "aluno/spinning_bak", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno.spinning_bak-5LAH4L7O.js", imports: ["/build/_shared/chunk-64A7QYJK.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/ballet": { id: "routes/ballet", parentId: "root", path: "ballet", index: void 0, caseSensitive: void 0, module: "/build/routes/ballet-TREA2SXZ.js", imports: ["/build/_shared/chunk-4CBDNLXM.js", "/build/_shared/chunk-BEREJSYK.js", "/build/_shared/chunk-YYN7P63Y.js", "/build/_shared/chunk-O52AUTEI.js", "/build/_shared/chunk-PAV5R4GA.js", "/build/_shared/chunk-BAOJAVQQ.js", "/build/_shared/chunk-OYFKMXR2.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/bancotreino": { id: "routes/bancotreino", parentId: "root", path: "bancotreino", index: void 0, caseSensitive: void 0, module: "/build/routes/bancotreino-VXWPMHKT.js", imports: ["/build/_shared/chunk-4QRBCJMT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/bancotreino.$grupo": { id: "routes/bancotreino.$grupo", parentId: "root", path: "bancotreino/:grupo", index: void 0, caseSensitive: void 0, module: "/build/routes/bancotreino.$grupo-DWPLWTQY.js", imports: ["/build/_shared/chunk-4QRBCJMT.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cadastro": { id: "routes/cadastro", parentId: "root", path: "cadastro", index: void 0, caseSensitive: void 0, module: "/build/routes/cadastro-2OMSLQAY.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cadastro.$exercicios": { id: "routes/cadastro.$exercicios", parentId: "root", path: "cadastro/:exercicios", index: void 0, caseSensitive: void 0, module: "/build/routes/cadastro.$exercicios-R6YBRWLI.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cadaulas.$aula": { id: "routes/cadaulas.$aula", parentId: "root", path: "cadaulas/:aula", index: void 0, caseSensitive: void 0, module: "/build/routes/cadaulas.$aula-MS3T2DB4.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cadaulas._index": { id: "routes/cadaulas._index", parentId: "root", path: "cadaulas/_index", index: void 0, caseSensitive: void 0, module: "/build/routes/cadaulas._index-XLJC4SHW.js", imports: ["/build/_shared/chunk-4QRBCJMT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cadaulas.nova": { id: "routes/cadaulas.nova", parentId: "root", path: "cadaulas/nova", index: void 0, caseSensitive: void 0, module: "/build/routes/cadaulas.nova-RT3SKU6D.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/especial": { id: "routes/especial", parentId: "root", path: "especial", index: void 0, caseSensitive: void 0, module: "/build/routes/especial-K3AQ5ROK.js", imports: ["/build/_shared/chunk-6OKMA4MO.js", "/build/_shared/chunk-YYN7P63Y.js", "/build/_shared/chunk-O52AUTEI.js", "/build/_shared/chunk-PAV5R4GA.js", "/build/_shared/chunk-BAOJAVQQ.js", "/build/_shared/chunk-OYFKMXR2.js", "/build/_shared/chunk-WOFGNCAM.js", "/build/_shared/chunk-DFM3RCCF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index_bak": { id: "routes/index_bak", parentId: "root", path: "index_bak", index: void 0, caseSensitive: void 0, module: "/build/routes/index_bak-GLRIASEP.js", imports: ["/build/_shared/chunk-JF65S77Q.js", "/build/_shared/chunk-4QRBCJMT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index_foto": { id: "routes/index_foto", parentId: "root", path: "index_foto", index: void 0, caseSensitive: void 0, module: "/build/routes/index_foto-2CIPMMOT.js", imports: ["/build/_shared/chunk-JF65S77Q.js", "/build/_shared/chunk-665ZSZOW.js", "/build/_shared/chunk-4QRBCJMT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/indexold": { id: "routes/indexold", parentId: "root", path: "indexold", index: void 0, caseSensitive: void 0, module: "/build/routes/indexold-S6WJQWK5.js", imports: ["/build/_shared/chunk-JF65S77Q.js", "/build/_shared/chunk-4QRBCJMT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-HSA2CQAC.js", imports: ["/build/_shared/chunk-O5B5HSOO.js", "/build/_shared/chunk-BEREJSYK.js", "/build/_shared/chunk-YYN7P63Y.js", "/build/_shared/chunk-O52AUTEI.js", "/build/_shared/chunk-YJIYKFF5.js", "/build/_shared/chunk-BAOJAVQQ.js", "/build/_shared/chunk-OYFKMXR2.js", "/build/_shared/chunk-4C6YJY4O.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-TLBEXFRQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/print.$exe": { id: "routes/print.$exe", parentId: "root", path: "print/:exe", index: void 0, caseSensitive: void 0, module: "/build/routes/print.$exe-ZFE3QXQ2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/spinning.$id": { id: "routes/spinning.$id", parentId: "root", path: "spinning/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/spinning.$id-RKRB35KL.js", imports: ["/build/_shared/chunk-YU3BFZSX.js", "/build/_shared/chunk-DRG2ZDRD.js", "/build/_shared/chunk-DFM3RCCF.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/spinning._index": { id: "routes/spinning._index", parentId: "root", path: "spinning/_index", index: void 0, caseSensitive: void 0, module: "/build/routes/spinning._index-74X4HLIB.js", imports: ["/build/_shared/chunk-YU3BFZSX.js", "/build/_shared/chunk-DRG2ZDRD.js", "/build/_shared/chunk-DFM3RCCF.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/spinning.index_old": { id: "routes/spinning.index_old", parentId: "root", path: "spinning/index_old", index: void 0, caseSensitive: void 0, module: "/build/routes/spinning.index_old-M55EWNLM.js", imports: ["/build/_shared/chunk-4C6YJY4O.js", "/build/_shared/chunk-665ZSZOW.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/teste": { id: "routes/teste", parentId: "root", path: "teste", index: void 0, caseSensitive: void 0, module: "/build/routes/teste-VGLBNFMV.js", imports: ["/build/_shared/chunk-4QRBCJMT.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/treinos": { id: "routes/treinos", parentId: "root", path: "treinos", index: void 0, caseSensitive: void 0, module: "/build/routes/treinos-Y5HJ44OH.js", imports: ["/build/_shared/chunk-4QRBCJMT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/treinos.$exe": { id: "routes/treinos.$exe", parentId: "root", path: "treinos/:exe", index: void 0, caseSensitive: void 0, module: "/build/routes/treinos.$exe-WNDNVPXK.js", imports: ["/build/_shared/chunk-4QRBCJMT.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-5D7349E5.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/aluno.planejamento_bak": {
    id: "routes/aluno.planejamento_bak",
    parentId: "root",
    path: "aluno/planejamento_bak",
    index: void 0,
    caseSensitive: void 0,
    module: aluno_planejamento_bak_exports
  },
  "routes/cadastro.$exercicios": {
    id: "routes/cadastro.$exercicios",
    parentId: "root",
    path: "cadastro/:exercicios",
    index: void 0,
    caseSensitive: void 0,
    module: cadastro_exercicios_exports
  },
  "routes/aluno.spinning_bak": {
    id: "routes/aluno.spinning_bak",
    parentId: "root",
    path: "aluno/spinning_bak",
    index: void 0,
    caseSensitive: void 0,
    module: aluno_spinning_bak_exports
  },
  "routes/bancotreino.$grupo": {
    id: "routes/bancotreino.$grupo",
    parentId: "root",
    path: "bancotreino/:grupo",
    index: void 0,
    caseSensitive: void 0,
    module: bancotreino_grupo_exports
  },
  "routes/spinning.index_old": {
    id: "routes/spinning.index_old",
    parentId: "root",
    path: "spinning/index_old",
    index: void 0,
    caseSensitive: void 0,
    module: spinning_index_old_exports
  },
  "routes/aluno.baktreino": {
    id: "routes/aluno.baktreino",
    parentId: "root",
    path: "aluno/baktreino",
    index: void 0,
    caseSensitive: void 0,
    module: aluno_baktreino_exports
  },
  "routes/aluno.index_bak": {
    id: "routes/aluno.index_bak",
    parentId: "root",
    path: "aluno/index_bak",
    index: void 0,
    caseSensitive: void 0,
    module: aluno_index_bak_exports
  },
  "routes/cadaulas._index": {
    id: "routes/cadaulas._index",
    parentId: "root",
    path: "cadaulas/_index",
    index: void 0,
    caseSensitive: void 0,
    module: cadaulas_index_exports
  },
  "routes/spinning._index": {
    id: "routes/spinning._index",
    parentId: "root",
    path: "spinning/_index",
    index: void 0,
    caseSensitive: void 0,
    module: spinning_index_exports
  },
  "routes/aluno.$maquina": {
    id: "routes/aluno.$maquina",
    parentId: "root",
    path: "aluno/:maquina",
    index: void 0,
    caseSensitive: void 0,
    module: aluno_maquina_exports
  },
  "routes/aluno.indexddd": {
    id: "routes/aluno.indexddd",
    parentId: "root",
    path: "aluno/indexddd",
    index: void 0,
    caseSensitive: void 0,
    module: aluno_indexddd_exports
  },
  "routes/cadaulas.$aula": {
    id: "routes/cadaulas.$aula",
    parentId: "root",
    path: "cadaulas/:aula",
    index: void 0,
    caseSensitive: void 0,
    module: cadaulas_aula_exports
  },
  "routes/cadaulas.nova": {
    id: "routes/cadaulas.nova",
    parentId: "root",
    path: "cadaulas/nova",
    index: void 0,
    caseSensitive: void 0,
    module: cadaulas_nova_exports
  },
  "routes/aluno._index": {
    id: "routes/aluno._index",
    parentId: "root",
    path: "aluno/_index",
    index: void 0,
    caseSensitive: void 0,
    module: aluno_index_exports
  },
  "routes/spinning.$id": {
    id: "routes/spinning.$id",
    parentId: "root",
    path: "spinning/:id",
    index: void 0,
    caseSensitive: void 0,
    module: spinning_id_exports
  },
  "routes/treinos.$exe": {
    id: "routes/treinos.$exe",
    parentId: "root",
    path: "treinos/:exe",
    index: void 0,
    caseSensitive: void 0,
    module: treinos_exe_exports
  },
  "routes/aluno.grupo": {
    id: "routes/aluno.grupo",
    parentId: "root",
    path: "aluno/grupo",
    index: void 0,
    caseSensitive: void 0,
    module: aluno_grupo_exports
  },
  "routes/bancotreino": {
    id: "routes/bancotreino",
    parentId: "root",
    path: "bancotreino",
    index: void 0,
    caseSensitive: void 0,
    module: bancotreino_exports
  },
  "routes/index_foto": {
    id: "routes/index_foto",
    parentId: "root",
    path: "index_foto",
    index: void 0,
    caseSensitive: void 0,
    module: index_foto_exports
  },
  "routes/print.$exe": {
    id: "routes/print.$exe",
    parentId: "root",
    path: "print/:exe",
    index: void 0,
    caseSensitive: void 0,
    module: print_exe_exports
  },
  "routes/index_bak": {
    id: "routes/index_bak",
    parentId: "root",
    path: "index_bak",
    index: void 0,
    caseSensitive: void 0,
    module: index_bak_exports
  },
  "routes/cadastro": {
    id: "routes/cadastro",
    parentId: "root",
    path: "cadastro",
    index: void 0,
    caseSensitive: void 0,
    module: cadastro_exports
  },
  "routes/especial": {
    id: "routes/especial",
    parentId: "root",
    path: "especial",
    index: void 0,
    caseSensitive: void 0,
    module: especial_exports
  },
  "routes/indexold": {
    id: "routes/indexold",
    parentId: "root",
    path: "indexold",
    index: void 0,
    caseSensitive: void 0,
    module: indexold_exports
  },
  "routes/treinos": {
    id: "routes/treinos",
    parentId: "root",
    path: "treinos",
    index: void 0,
    caseSensitive: void 0,
    module: treinos_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: "_index",
    index: void 0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/ballet": {
    id: "routes/ballet",
    parentId: "root",
    path: "ballet",
    index: void 0,
    caseSensitive: void 0,
    module: ballet_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/teste": {
    id: "routes/teste",
    parentId: "root",
    path: "teste",
    index: void 0,
    caseSensitive: void 0,
    module: teste_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
