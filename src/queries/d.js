var d = {
  description:
    'このスキーマ定義では、Qiita API v2 のインターフェースをJSON Hyper Schema draft v4形式で表現しています。',
  properties: {
    access_token: {
      description:
        'Qiita API v2で認証・認可を行うためのアクセストークンを表します。',
      links: [
        {
          description:
            '与えられた認証情報をもとに新しいアクセストークンを発行します。',
          href: '/api/v2/access_tokens',
          method: 'POST',
          rel: 'create',
          schema: {
            properties: {
              client_id: {
                description: '登録されたAPIクライアントを特定するためのID',
                example:
                  'a91f0396a0968ff593eafdd194e3d17d32c41b1da7b25e873b42e9058058cd9d',
                pattern: '^[0-9a-f]{40}$',
                type: 'string',
              },
              client_secret: {
                description: '登録されたAPIクライアントを認証するための秘密鍵',
                example:
                  '01fc259c31fe39e72c8ef911c3432a33d51e9337ff34c4fac86c491a0d37251f',
                pattern: '^[0-9a-f]{40}$',
                type: 'string',
              },
              code: {
                description:
                  'リダイレクト用のURLに付与された、アクセストークンと交換するための文字列',
                example:
                  'fefef5f067171f247fb415e38cb0631797b82f4141dcdee66db846c3ade57a03',
                pattern: '^[0-9a-f]{40}$',
                type: 'string',
              },
            },
            required: ['client_id', 'client_secret', 'code'],
          },
          title: 'create_access_token',
        },
        {
          description:
            '指定されたアクセストークンを失効させ、それ以降利用できないようにします。',
          href: '/api/v2/access_tokens/:access_token',
          mediaType: 'null',
          method: 'DELETE',
          rel: 'delete',
          title: 'delete_access_token',
        },
      ],
      properties: {
        client_id: {
          description: '登録されたAPIクライアントを特定するためのID',
          example:
            'a91f0396a0968ff593eafdd194e3d17d32c41b1da7b25e873b42e9058058cd9d',
          pattern: '^[0-9a-f]{40}$',
          type: 'string',
        },
        scopes: {
          description: 'アクセストークンに許された操作の一覧',
          items: { example: 'read_qiita', type: 'string' },
          type: 'array',
        },
        token: {
          description: 'アクセストークンを表現する文字列',
          example:
            'ea5d0a593b2655e9568f144fb1826342292f5c6b7d406fda00577b8d1530d8a5',
          pattern: '^[0-9a-f]{40}$',
          type: 'string',
        },
      },
      required: ['client_id', 'scopes', 'token'],
      title: 'アクセストークン',
    },
    authenticated_user: {
      description:
        '現在のアクセストークンで認証中のユーザを表します。通常のユーザ情報よりも詳細な情報を含んでいます。',
      links: [
        {
          description: 'アクセストークンに紐付いたユーザを返します。',
          href: '/api/v2/authenticated_user',
          method: 'GET',
          rel: 'self',
          title: 'get_authenticated_user',
        },
      ],
      properties: {
        description: {
          description: '自己紹介文',
          example: 'Hello, world.',
          type: ['null', 'string'],
        },
        facebook_id: {
          description: 'Facebook ID',
          example: 'qiita',
          type: ['null', 'string'],
        },
        followees_count: {
          description: 'このユーザがフォローしているユーザの数',
          example: 100,
          type: 'integer',
        },
        followers_count: {
          description: 'このユーザをフォローしているユーザの数',
          example: 200,
          type: 'integer',
        },
        github_login_name: {
          description: 'GitHub ID',
          example: 'qiitan',
          type: ['null', 'string'],
        },
        id: { description: 'ユーザID', example: 'qiita', type: 'string' },
        items_count: {
          description:
            'このユーザが qiita.com 上で公開している記事の数 (Qiita Teamでの記事数は含まれません)',
          example: 300,
          type: 'integer',
        },
        linkedin_id: {
          description: 'LinkedIn ID',
          example: 'qiita',
          type: ['null', 'string'],
        },
        location: {
          description: '居住地',
          example: 'Tokyo, Japan',
          type: ['null', 'string'],
        },
        name: {
          description: '設定している名前',
          example: 'Qiita キータ',
          type: ['null', 'string'],
        },
        organization: {
          description: '所属している組織',
          example: 'Increments Inc',
          type: ['null', 'string'],
        },
        permanent_id: {
          description: 'ユーザごとに割り当てられる整数のID',
          example: 1,
          type: 'integer',
        },
        profile_image_url: {
          description: '設定しているプロフィール画像のURL',
          example:
            'https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/88/ccf90b557a406157dbb9d2d7e543dae384dbb561/large.png?1575443439',
          type: 'string',
        },
        team_only: {
          description: 'Qiita Team専用モードに設定されているかどうか',
          example: false,
          type: 'boolean',
        },
        twitter_screen_name: {
          description: 'Twitterのスクリーンネーム',
          example: 'qiita',
          type: ['null', 'string'],
        },
        website_url: {
          description: '設定しているWebサイトのURL',
          example: 'https://qiita.com',
          type: ['null', 'string'],
        },
        image_monthly_upload_limit: {
          description: '1ヶ月あたりにQiitaにアップロードできる画像の総容量',
          example: 1048576,
          type: 'integer',
        },
        image_monthly_upload_remaining: {
          description: 'その月にQiitaにアップロードできる画像の残りの容量',
          example: 524288,
          type: 'integer',
        },
      },
      required: [
        'description',
        'facebook_id',
        'followees_count',
        'followers_count',
        'github_login_name',
        'id',
        'items_count',
        'linkedin_id',
        'location',
        'name',
        'organization',
        'permanent_id',
        'profile_image_url',
        'team_only',
        'twitter_screen_name',
        'website_url',
        'image_monthly_upload_limit',
        'image_monthly_upload_remaining',
      ],
      title: '認証中のユーザ',
    },
    comment: {
      description:
        '記事やプロジェクトに付けられたコメントを表します。プロジェクトへのコメントはQiita Teamでのみ有効です。',
      links: [
        {
          description: 'コメントを削除します。',
          href: '/api/v2/comments/:comment_id',
          mediaType: 'null',
          method: 'DELETE',
          rel: 'delete',
          title: 'delete_comment',
        },
        {
          description: 'コメントを取得します。',
          href: '/api/v2/comments/:comment_id',
          method: 'GET',
          rel: 'self',
          title: 'get_comment',
        },
        {
          description: 'コメントを更新します。',
          href: '/api/v2/comments/:comment_id',
          method: 'PATCH',
          rel: 'update',
          schema: {
            properties: {
              body: {
                description: 'コメントの内容を表すMarkdown形式の文字列',
                example: '# Example',
                type: 'string',
              },
            },
            required: ['body'],
          },
          title: 'update_comment',
        },
        {
          description:
            '\u003cstrong\u003eDELETE /api/v2/comments/:comment_id/thank は2020年11月4日より廃止となりました。\u003c/strong\u003e',
          href: '/api/v2/comments/:comment_id/thank',
          method: 'DELETE',
          mediaType: 'null',
          rel: 'delete',
          title: 'unthank_comment',
        },
        {
          description:
            '\u003cstrong\u003ePUT /api/v2/comments/:comment_id/thank は2020年11月4日より廃止となりました。\u003c/strong\u003e',
          href: '/api/v2/comments/:comment_id/thank',
          method: 'PUT',
          mediaType: 'null',
          rel: 'create',
          title: 'thank_comment',
        },
        {
          description:
            '投稿に付けられたコメント一覧を投稿日時の降順で取得します。',
          href: '/api/v2/items/:item_id/comments',
          method: 'GET',
          rel: 'instances',
          title: 'list_item_comments',
        },
        {
          description: '記事に対してコメントを投稿します。',
          href: '/api/v2/items/:item_id/comments',
          method: 'POST',
          rel: 'create',
          schema: {
            properties: {
              body: {
                description: 'コメントの内容を表すMarkdown形式の文字列',
                example: '# Example',
                type: 'string',
              },
            },
            required: ['body'],
          },
          title: 'create_item_comment',
        },
        {
          description:
            'ユーザー名を指定して記事に対するコメントを作成します。(Qiita Teamでのみ有効。管理者権限が必要。)',
          href: '/api/v2/items/:item_id/imported_comments',
          method: 'POST',
          rel: 'create',
          schema: {
            properties: {
              body: {
                description: 'コメントの内容を表すMarkdown形式の文字列',
                example: '# Example',
                type: 'string',
              },
              user_id: {
                description: 'ユーザID',
                example: 'qiita',
                type: 'string',
              },
              created_at: {
                description: 'データが作成された日時',
                example: '2000-01-01T00:00:00+00:00',
                format: 'date-time',
                type: 'string',
              },
              updated_at: {
                description: 'データが最後に更新された日時',
                example: '2000-01-01T00:00:00+00:00',
                format: 'date-time',
                type: 'string',
              },
            },
            required: ['body', 'user_id'],
          },
          title: 'import_item_comment',
        },
        {
          description:
            'プロジェクトに付けられたコメント一覧を投稿日時の降順で取得します。',
          href: '/api/v2/projects/:project_id/comments',
          method: 'GET',
          rel: 'instances',
          title: 'list_project_comments',
        },
        {
          description: 'プロジェクトに対してコメントを投稿します。',
          href: '/api/v2/projects/:project_id/comments',
          method: 'POST',
          rel: 'create',
          schema: {
            properties: {
              body: {
                description: 'コメントの内容を表すMarkdown形式の文字列',
                example: '# Example',
                type: 'string',
              },
            },
            required: ['body'],
          },
          title: 'create_project_comment',
        },
        {
          description:
            'ユーザー名を指定してプロジェクトに対するコメントを作成します。(Qiita Teamでのみ有効。管理者権限が必要。)',
          href: '/api/v2/projects/:project_id/imported_comments',
          method: 'POST',
          rel: 'create',
          schema: {
            properties: {
              body: {
                description: 'コメントの内容を表すMarkdown形式の文字列',
                example: '# Example',
                type: 'string',
              },
              user_id: {
                description: 'ユーザID',
                example: 'qiita',
                type: 'string',
              },
              created_at: {
                description: 'データが作成された日時',
                example: '2000-01-01T00:00:00+00:00',
                format: 'date-time',
                type: 'string',
              },
              updated_at: {
                description: 'データが最後に更新された日時',
                example: '2000-01-01T00:00:00+00:00',
                format: 'date-time',
                type: 'string',
              },
            },
            required: ['body', 'user_id'],
          },
          title: 'import_project_comment',
        },
      ],
      properties: {
        body: {
          description: 'コメントの内容を表すMarkdown形式の文字列',
          example: '# Example',
          type: 'string',
        },
        created_at: {
          description: 'データが作成された日時',
          example: '2000-01-01T00:00:00+00:00',
          format: 'date-time',
          type: 'string',
        },
        id: {
          description: 'コメントの一意なID',
          example: '3391f50c35f953abfc4f',
          pattern: '^[0-9a-f]{20}$',
          type: 'string',
        },
        rendered_body: {
          description: 'コメントの内容を表すHTML形式の文字列',
          example: '\u003ch1\u003eExample\u003c/h1\u003e',
          type: 'string',
        },
        updated_at: {
          description: 'データが最後に更新された日時',
          example: '2000-01-01T00:00:00+00:00',
          format: 'date-time',
          type: 'string',
        },
        user: {
          description: 'Qiita上のユーザを表します。',
          properties: {
            description: {
              description: '自己紹介文',
              example: 'Hello, world.',
              type: ['null', 'string'],
            },
            facebook_id: {
              description: 'Facebook ID',
              example: 'qiita',
              type: ['null', 'string'],
            },
            followees_count: {
              description: 'このユーザがフォローしているユーザの数',
              example: 100,
              type: 'integer',
            },
            followers_count: {
              description: 'このユーザをフォローしているユーザの数',
              example: 200,
              type: 'integer',
            },
            github_login_name: {
              description: 'GitHub ID',
              example: 'qiitan',
              type: ['null', 'string'],
            },
            id: { description: 'ユーザID', example: 'qiita', type: 'string' },
            items_count: {
              description:
                'このユーザが qiita.com 上で公開している記事の数 (Qiita Teamでの記事数は含まれません)',
              example: 300,
              type: 'integer',
            },
            linkedin_id: {
              description: 'LinkedIn ID',
              example: 'qiita',
              type: ['null', 'string'],
            },
            location: {
              description: '居住地',
              example: 'Tokyo, Japan',
              type: ['null', 'string'],
            },
            name: {
              description: '設定している名前',
              example: 'Qiita キータ',
              type: ['null', 'string'],
            },
            organization: {
              description: '所属している組織',
              example: 'Increments Inc',
              type: ['null', 'string'],
            },
            permanent_id: {
              description: 'ユーザごとに割り当てられる整数のID',
              example: 1,
              type: 'integer',
            },
            profile_image_url: {
              description: '設定しているプロフィール画像のURL',
              example:
                'https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/88/ccf90b557a406157dbb9d2d7e543dae384dbb561/large.png?1575443439',
              type: 'string',
            },
            team_only: {
              description: 'Qiita Team専用モードに設定されているかどうか',
              example: false,
              type: 'boolean',
            },
            twitter_screen_name: {
              description: 'Twitterのスクリーンネーム',
              example: 'qiita',
              type: ['null', 'string'],
            },
            website_url: {
              description: '設定しているWebサイトのURL',
              example: 'https://qiita.com',
              type: ['null', 'string'],
            },
          },
          required: [
            'description',
            'facebook_id',
            'followees_count',
            'followers_count',
            'github_login_name',
            'id',
            'items_count',
            'linkedin_id',
            'location',
            'name',
            'organization',
            'permanent_id',
            'profile_image_url',
            'team_only',
            'twitter_screen_name',
            'website_url',
          ],
          title: 'ユーザ',
        },
      },
      required: [
        'body',
        'created_at',
        'id',
        'rendered_body',
        'updated_at',
        'user',
      ],
      title: 'コメント',
    },
    expanded_template: {
      description:
        'テンプレートを保存する前に変数展開後の状態をプレビューできます。Qiita Teamでのみ有効です。',
      links: [
        {
          description:
            '受け取ったテンプレート用文字列の変数を展開して返します。',
          href: '/api/v2/expanded_templates',
          method: 'POST',
          rel: 'create',
          schema: {
            properties: {
              body: {
                description: 'テンプレートの本文',
                example: 'Weekly MTG on %{Year}/%{month}/%{day}',
                type: 'string',
              },
              tags: {
                description: 'タグ一覧',
                example: [
                  { name: 'MTG/%{Year}/%{month}/%{day}', versions: ['0.0.1'] },
                ],
                items: {
                  properties: {
                    name: { type: 'string' },
                    versions: { items: { type: 'string' }, type: 'array' },
                  },
                  required: ['name'],
                },
                type: 'array',
                uniqueItems: true,
              },
              title: {
                description: '生成される記事のタイトルの雛形',
                example: 'Weekly MTG on %{Year}/%{month}/%{day}',
                type: 'string',
              },
            },
            required: ['body', 'tags', 'title'],
          },
          title: 'create_expanded_template',
        },
      ],
      properties: {
        expanded_body: {
          description: '変数を展開した状態の本文',
          example: 'Weekly MTG on 2000/01/01',
          type: 'string',
        },
        expanded_tags: {
          description: '変数を展開した状態のタグ一覧',
          example: [{ name: 'MTG/2000/01/01', versions: ['0.0.1'] }],
          items: {
            properties: {
              name: { type: 'string' },
              versions: { items: { type: 'string' }, type: 'array' },
            },
            required: ['name'],
          },
          type: 'array',
          uniqueItems: true,
        },
        expanded_title: {
          description: '変数を展開した状態のタイトル',
          example: 'Weekly MTG on 2015/06/03',
          type: 'string',
        },
      },
      required: ['expanded_body', 'expanded_tags', 'expanded_title'],
      title: '展開済みテンプレート',
    },
    group: {
      description: 'Qiita Teamのグループを表します。',
      properties: {
        created_at: {
          description: 'データが作成された日時',
          example: '2000-01-01T00:00:00+00:00',
          format: 'date-time',
          type: 'string',
        },
        id: {
          description: 'グループの一意なIDを表します。',
          example: 1,
          type: 'integer',
        },
        name: {
          description: 'グループに付けられた表示用の名前を表します。',
          example: 'Dev',
          type: 'string',
        },
        private: {
          description: '非公開グループかどうかを表します。',
          example: false,
          type: 'boolean',
        },
        updated_at: {
          description: 'データが最後に更新された日時',
          example: '2000-01-01T00:00:00+00:00',
          format: 'date-time',
          type: 'string',
        },
        url_name: {
          description: 'グループのチーム上での一意な名前を表します。',
          example: 'dev',
          type: 'string',
        },
      },
      required: [
        'created_at',
        'id',
        'name',
        'private',
        'updated_at',
        'url_name',
      ],
      title: 'グループ',
    },
    item: {
      description: 'ユーザからの投稿を表します。',
      links: [
        {
          description: '認証中のユーザの記事の一覧を作成日時の降順で返します。',
          href: '/api/v2/authenticated_user/items',
          method: 'GET',
          rel: 'instances',
          schema: {
            properties: {
              page: {
                description: 'ページ番号 (1から100まで)',
                example: 1,
                pattern: '^[0-9]+$',
                type: 'string',
              },
              per_page: {
                description: '1ページあたりに含まれる要素数 (1から100まで)',
                example: 20,
                pattern: '^[0-9]+$',
                type: 'string',
              },
            },
          },
          title: 'list_authenticated_user_items',
        },
        {
          description: '記事の一覧を作成日時の降順で返します。',
          href: '/api/v2/items',
          method: 'GET',
          rel: 'instances',
          schema: {
            properties: {
              page: {
                description: 'ページ番号 (1から100まで)',
                example: 1,
                pattern: '^[0-9]+$',
                type: 'string',
              },
              per_page: {
                description: '1ページあたりに含まれる要素数 (1から100まで)',
                example: 20,
                pattern: '^[0-9]+$',
                type: 'string',
              },
              query: {
                description: '検索クエリ',
                example: 'qiita user:Qiita',
                type: 'string',
              },
            },
          },
          title: 'list_items',
        },
        {
          description: '新たに記事を作成します。',
          href: '/api/v2/items',
          method: 'POST',
          rel: 'create',
          schema: {
            properties: {
              body: {
                description: 'Markdown形式の本文',
                example: '# Example',
                type: 'string',
              },
              coediting: {
                description:
                  'この記事が共同更新状態かどうか (Qiita Teamでのみ有効)',
                example: false,
                type: 'boolean',
              },
              group_url_name: {
                description:
                  'この投稿を公開するグループの url_name (null で全体に公開。Qiita Teamでのみ有効)',
                example: 'dev',
                type: ['null', 'string'],
              },
              private: {
                description:
                  '限定共有状態かどうかを表すフラグ (Qiita Teamでは無効)',
                example: false,
                type: 'boolean',
              },
              tags: {
                description: '記事に付いたタグ一覧',
                example: [{ name: 'Ruby', versions: ['0.0.1'] }],
                items: {
                  properties: {
                    name: { type: 'string' },
                    versions: { items: { type: 'string' }, type: 'array' },
                  },
                  required: ['name'],
                  type: 'object',
                },
                type: 'array',
                uniqueItems: true,
              },
              title: {
                description: '記事のタイトル',
                example: 'Example title',
                type: 'string',
              },
              tweet: {
                description:
                  'Twitterに投稿するかどうか (Twitter連携を有効化している場合のみ有効)',
                example: false,
                type: 'boolean',
              },
            },
            required: ['body', 'tags', 'title'],
          },
          title: 'create_item',
        },
        {
          description: '記事を削除します。',
          href: '/api/v2/items/:item_id',
          method: 'DELETE',
          rel: 'delete',
          title: 'delete_item',
        },
        {
          description: '記事を取得します。',
          href: '/api/v2/items/:item_id',
          method: 'GET',
          rel: 'self',
          title: 'get_item',
        },
        {
          description: '記事を更新します。',
          href: '/api/v2/items/:item_id',
          method: 'PATCH',
          rel: 'update',
          schema: {
            properties: {
              body: {
                description: 'Markdown形式の本文',
                example: '# Example',
                type: 'string',
              },
              coediting: {
                description:
                  'この記事が共同更新状態かどうか (Qiita Teamでのみ有効)',
                example: false,
                type: 'boolean',
              },
              group_url_name: {
                description:
                  'この投稿を公開するグループの url_name (null で全体に公開。Qiita Teamでのみ有効)',
                example: 'dev',
                type: ['null', 'string'],
              },
              private: {
                description:
                  '限定共有状態かどうかを表すフラグ (Qiita Teamでは無効)',
                example: false,
                type: 'boolean',
              },
              tags: {
                description: '記事に付いたタグ一覧',
                example: [{ name: 'Ruby', versions: ['0.0.1'] }],
                items: {
                  properties: {
                    name: { type: 'string' },
                    versions: { items: { type: 'string' }, type: 'array' },
                  },
                  required: ['name'],
                  type: 'object',
                },
                type: 'array',
                uniqueItems: true,
              },
              title: {
                description: '記事のタイトル',
                example: 'Example title',
                type: 'string',
              },
            },
            required: ['body', 'title'],
          },
          title: 'update_item',
        },
        {
          description:
            'ユーザー名、日時を指定して記事を作成します。(Qiita Teamでのみ有効。管理者権限が必要。)',
          href: '/api/v2/imported_items',
          method: 'POST',
          rel: 'create',
          schema: {
            properties: {
              body: {
                description: 'Markdown形式の本文',
                example: '# Example',
                type: 'string',
              },
              coediting: {
                description:
                  'この記事が共同更新状態かどうか (Qiita Teamでのみ有効)',
                example: false,
                type: 'boolean',
              },
              group_url_name: {
                description:
                  'この投稿を公開するグループの url_name (null で全体に公開。Qiita Teamでのみ有効)',
                example: 'dev',
                type: ['null', 'string'],
              },
              tags: {
                description: '記事に付いたタグ一覧',
                example: [{ name: 'Ruby', versions: ['0.0.1'] }],
                items: {
                  properties: {
                    name: { type: 'string' },
                    versions: { items: { type: 'string' }, type: 'array' },
                  },
                  required: ['name'],
                  type: 'object',
                },
                type: 'array',
                uniqueItems: true,
              },
              title: {
                description: '記事のタイトル',
                example: 'Example title',
                type: 'string',
              },
              user_id: {
                description: 'ユーザID',
                example: 'qiita',
                type: 'string',
              },
              created_at: {
                description: 'データが作成された日時',
                example: '2000-01-01T00:00:00+00:00',
                format: 'date-time',
                type: 'string',
              },
              updated_at: {
                description: 'データが最後に更新された日時',
                example: '2000-01-01T00:00:00+00:00',
                format: 'date-time',
                type: 'string',
              },
            },
            required: ['body', 'tags', 'title', 'user_id'],
          },
          title: 'import_item',
        },
        {
          description:
            '\u003cstrong\u003eQiita TeamのLGTMAPIは2020年11月4日より廃止となりました。今後は絵文字リアクションAPIをご利用ください。\u003c/strong\u003e 記事への「LGTM！」を取り消します。',
          href: '/api/v2/items/:item_id/like',
          mediaType: 'null',
          method: 'DELETE',
          rel: 'delete',
          title: 'unlike_item',
        },
        {
          description:
            '\u003cstrong\u003eQiita TeamのLGTMAPIは2020年11月4日より廃止となりました。今後は絵文字リアクションAPIをご利用ください。\u003c/strong\u003e 記事に「LGTM！」を付けます。',
          href: '/api/v2/items/:item_id/like',
          mediaType: 'null',
          method: 'PUT',
          rel: 'put',
          title: 'like_item',
        },
        {
          description: '記事をストックします。',
          href: '/api/v2/items/:item_id/stock',
          mediaType: 'null',
          method: 'PUT',
          rel: 'put',
          title: 'stock_item',
        },
        {
          description: '記事をストックから取り除きます。',
          href: '/api/v2/items/:item_id/stock',
          mediaType: 'null',
          method: 'DELETE',
          rel: 'delete',
          title: 'unstock_item',
        },
        {
          description: '記事をストックしているかどうかを調べます。',
          href: '/api/v2/items/:item_id/stock',
          mediaType: 'null',
          method: 'GET',
          rel: 'check',
          title: 'get_item_stock',
        },
        {
          description:
            '\u003cstrong\u003eQiita TeamのLGTMAPIは2020年11月4日より廃止となりました。今後は絵文字リアクションAPIをご利用ください。\u003c/strong\u003e 記事に「LGTM！」を付けているかどうかを調べます。',
          href: '/api/v2/items/:item_id/like',
          mediaType: 'null',
          method: 'GET',
          rel: 'check',
          title: 'get_item_like',
        },
        {
          description: '記事をストックします。',
          href: '/api/v2/items/:item_id/stock',
          mediaType: 'null',
          method: 'PUT',
          rel: 'put',
          title: 'stock_item',
        },
        {
          description:
            '指定されたタグが付けられた記事一覧を、タグを付けた日時の降順で返します。',
          href: '/api/v2/tags/:tag_id/items',
          method: 'GET',
          rel: 'instances',
          schema: {
            properties: {
              page: {
                description: 'ページ番号 (1から100まで)',
                example: 1,
                pattern: '^[0-9]+$',
                type: 'string',
              },
              per_page: {
                description: '1ページあたりに含まれる要素数 (1から100まで)',
                example: 20,
                pattern: '^[0-9]+$',
                type: 'string',
              },
            },
          },
          title: 'list_tag_items',
        },
        {
          description:
            '指定されたユーザの記事一覧を、作成日時の降順で返します。',
          href: '/api/v2/users/:user_id/items',
          method: 'GET',
          rel: 'instances',
          schema: {
            properties: {
              page: {
                description: 'ページ番号 (1から100まで)',
                example: 1,
                pattern: '^[0-9]+$',
                type: 'string',
              },
              per_page: {
                description: '1ページあたりに含まれる要素数 (1から100まで)',
                example: 20,
                pattern: '^[0-9]+$',
                type: 'string',
              },
            },
          },
          title: 'list_user_items',
        },
        {
          description:
            '指定されたユーザがストックした記事一覧を、ストックした日時の降順で返します。',
          href: '/api/v2/users/:user_id/stocks',
          method: 'GET',
          rel: 'instances',
          schema: {
            properties: {
              page: {
                description: 'ページ番号 (1から100まで)',
                example: 1,
                pattern: '^[0-9]+$',
                type: 'string',
              },
              per_page: {
                description: '1ページあたりに含まれる要素数 (1から100まで)',
                example: 20,
                pattern: '^[0-9]+$',
                type: 'string',
              },
            },
          },
          title: 'list_user_stocks',
        },
      ],
      properties: {
        rendered_body: {
          description: 'HTML形式の本文',
          example: '\u003ch1\u003eExample\u003c/h1\u003e',
          type: 'string',
        },
        body: {
          description: 'Markdown形式の本文',
          example: '# Example',
          type: 'string',
        },
        coediting: {
          description: 'この記事が共同更新状態かどうか (Qiita Teamでのみ有効)',
          example: false,
          type: 'boolean',
        },
        comments_count: {
          description: 'この記事へのコメントの数',
          example: 100,
          type: 'integer',
        },
        created_at: {
          description: 'データが作成された日時',
          example: '2000-01-01T00:00:00+00:00',
          format: 'date-time',
          type: 'string',
        },
        group: {
          description: 'Qiita Teamのグループを表します。',
          properties: {
            created_at: {
              description: 'データが作成された日時',
              example: '2000-01-01T00:00:00+00:00',
              format: 'date-time',
              type: 'string',
            },
            id: {
              description: 'グループの一意なIDを表します。',
              example: 1,
              type: 'integer',
            },
            name: {
              description: 'グループに付けられた表示用の名前を表します。',
              example: 'Dev',
              type: 'string',
            },
            private: {
              description: '非公開グループかどうかを表します。',
              example: false,
              type: 'boolean',
            },
            updated_at: {
              description: 'データが最後に更新された日時',
              example: '2000-01-01T00:00:00+00:00',
              format: 'date-time',
              type: 'string',
            },
            url_name: {
              description: 'グループのチーム上での一意な名前を表します。',
              example: 'dev',
              type: 'string',
            },
          },
          required: [
            'created_at',
            'id',
            'name',
            'private',
            'updated_at',
            'url_name',
          ],
          title: 'グループ',
        },
        id: {
          description: '記事の一意なID',
          example: 'c686397e4a0f4f11683d',
          pattern: '^[0-9a-f]{20}$',
          type: 'string',
        },
        likes_count: {
          description: 'この記事への「LGTM！」の数（Qiitaでのみ有効）',
          example: 100,
          type: 'integer',
        },
        private: {
          description: '限定共有状態かどうかを表すフラグ (Qiita Teamでは無効)',
          example: false,
          type: 'boolean',
        },
        reactions_count: {
          description: '絵文字リアクションの数（Qiita Teamでのみ有効）',
          example: 100,
          type: 'integer',
        },
        tags: {
          description: '記事に付いたタグ一覧',
          example: [{ name: 'Ruby', versions: ['0.0.1'] }],
          items: {
            properties: {
              name: { type: 'string' },
              versions: { items: { type: 'string' }, type: 'array' },
            },
            required: ['name'],
            type: 'object',
          },
          type: 'array',
          uniqueItems: true,
        },
        title: {
          description: '記事のタイトル',
          example: 'Example title',
          type: 'string',
        },
        updated_at: {
          description: 'データが最後に更新された日時',
          example: '2000-01-01T00:00:00+00:00',
          format: 'date-time',
          type: 'string',
        },
        url: {
          description: '記事のURL',
          example: 'https://qiita.com/Qiita/items/c686397e4a0f4f11683d',
          type: 'string',
        },
        user: {
          description: 'Qiita上のユーザを表します。',
          properties: {
            description: {
              description: '自己紹介文',
              example: 'Hello, world.',
              type: ['null', 'string'],
            },
            facebook_id: {
              description: 'Facebook ID',
              example: 'qiita',
              type: ['null', 'string'],
            },
            followees_count: {
              description: 'このユーザがフォローしているユーザの数',
              example: 100,
              type: 'integer',
            },
            followers_count: {
              description: 'このユーザをフォローしているユーザの数',
              example: 200,
              type: 'integer',
            },
            github_login_name: {
              description: 'GitHub ID',
              example: 'qiitan',
              type: ['null', 'string'],
            },
            id: { description: 'ユーザID', example: 'qiita', type: 'string' },
            items_count: {
              description:
                'このユーザが qiita.com 上で公開している記事の数 (Qiita Teamでの記事数は含まれません)',
              example: 300,
              type: 'integer',
            },
            linkedin_id: {
              description: 'LinkedIn ID',
              example: 'qiita',
              type: ['null', 'string'],
            },
            location: {
              description: '居住地',
              example: 'Tokyo, Japan',
              type: ['null', 'string'],
            },
            name: {
              description: '設定している名前',
              example: 'Qiita キータ',
              type: ['null', 'string'],
            },
            organization: {
              description: '所属している組織',
              example: 'Increments Inc',
              type: ['null', 'string'],
            },
            permanent_id: {
              description: 'ユーザごとに割り当てられる整数のID',
              example: 1,
              type: 'integer',
            },
            profile_image_url: {
              description: '設定しているプロフィール画像のURL',
              example:
                'https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/88/ccf90b557a406157dbb9d2d7e543dae384dbb561/large.png?1575443439',
              type: 'string',
            },
            team_only: {
              description: 'Qiita Team専用モードに設定されているかどうか',
              example: false,
              type: 'boolean',
            },
            twitter_screen_name: {
              description: 'Twitterのスクリーンネーム',
              example: 'qiita',
              type: ['null', 'string'],
            },
            website_url: {
              description: '設定しているWebサイトのURL',
              example: 'https://qiita.com',
              type: ['null', 'string'],
            },
          },
          required: [
            'description',
            'facebook_id',
            'followees_count',
            'followers_count',
            'github_login_name',
            'id',
            'items_count',
            'linkedin_id',
            'location',
            'name',
            'organization',
            'permanent_id',
            'profile_image_url',
            'team_only',
            'twitter_screen_name',
            'website_url',
          ],
          title: 'ユーザ',
        },
        page_views_count: {
          description: '閲覧数',
          example: 100,
          type: ['null', 'integer'],
        },
      },
      required: [
        'rendered_body',
        'body',
        'coediting',
        'comments_count',
        'created_at',
        'group',
        'id',
        'likes_count',
        'private',
        'reactions_count',
        'tags',
        'title',
        'updated_at',
        'url',
        'user',
        'page_views_count',
      ],
      title: '投稿',
    },
    like: {
      description:
        '\u003cstrong\u003eQiita TeamのLGTMAPIは2020年11月4日より廃止となりました。今後は絵文字リアクションAPIをご利用ください。\u003c/strong\u003e 記事につけられた「LGTM！」を表します。',
      links: [
        {
          description: '記事につけられた「LGTM！」を作成日時の降順で返します。',
          href: '/api/v2/items/:item_id/likes',
          method: 'GET',
          rel: 'instances',
          title: 'list_item_likes',
        },
      ],
      properties: {
        created_at: {
          description: 'データが作成された日時',
          example: '2000-01-01T00:00:00+00:00',
          format: 'date-time',
          type: 'string',
        },
        user: {
          description: 'Qiita上のユーザを表します。',
          properties: {
            description: {
              description: '自己紹介文',
              example: 'Hello, world.',
              type: ['null', 'string'],
            },
            facebook_id: {
              description: 'Facebook ID',
              example: 'qiita',
              type: ['null', 'string'],
            },
            followees_count: {
              description: 'このユーザがフォローしているユーザの数',
              example: 100,
              type: 'integer',
            },
            followers_count: {
              description: 'このユーザをフォローしているユーザの数',
              example: 200,
              type: 'integer',
            },
            github_login_name: {
              description: 'GitHub ID',
              example: 'qiitan',
              type: ['null', 'string'],
            },
            id: { description: 'ユーザID', example: 'qiita', type: 'string' },
            items_count: {
              description:
                'このユーザが qiita.com 上で公開している記事の数 (Qiita Teamでの記事数は含まれません)',
              example: 300,
              type: 'integer',
            },
            linkedin_id: {
              description: 'LinkedIn ID',
              example: 'qiita',
              type: ['null', 'string'],
            },
            location: {
              description: '居住地',
              example: 'Tokyo, Japan',
              type: ['null', 'string'],
            },
            name: {
              description: '設定している名前',
              example: 'Qiita キータ',
              type: ['null', 'string'],
            },
            organization: {
              description: '所属している組織',
              example: 'Increments Inc',
              type: ['null', 'string'],
            },
            permanent_id: {
              description: 'ユーザごとに割り当てられる整数のID',
              example: 1,
              type: 'integer',
            },
            profile_image_url: {
              description: '設定しているプロフィール画像のURL',
              example:
                'https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/88/ccf90b557a406157dbb9d2d7e543dae384dbb561/large.png?1575443439',
              type: 'string',
            },
            team_only: {
              description: 'Qiita Team専用モードに設定されているかどうか',
              example: false,
              type: 'boolean',
            },
            twitter_screen_name: {
              description: 'Twitterのスクリーンネーム',
              example: 'qiita',
              type: ['null', 'string'],
            },
            website_url: {
              description: '設定しているWebサイトのURL',
              example: 'https://qiita.com',
              type: ['null', 'string'],
            },
          },
          required: [
            'description',
            'facebook_id',
            'followees_count',
            'followers_count',
            'github_login_name',
            'id',
            'items_count',
            'linkedin_id',
            'location',
            'name',
            'organization',
            'permanent_id',
            'profile_image_url',
            'team_only',
            'twitter_screen_name',
            'website_url',
          ],
          title: 'ユーザ',
        },
      },
      required: ['created_at', 'user'],
      title: 'LGTM',
    },
    project: {
      description:
        'Qiita Team上でのプロジェクトを表します。Qiita Teamでのみ有効です。',
      links: [
        {
          description:
            'チーム内に存在するプロジェクト一覧をプロジェクト作成日時の降順で返します。',
          href: '/api/v2/projects',
          method: 'GET',
          rel: 'instances',
          schema: {
            properties: {
              page: {
                description: 'ページ番号 (1から100まで)',
                example: 1,
                pattern: '^[0-9]+$',
                type: 'string',
              },
              per_page: {
                description: '1ページあたりに含まれる要素数 (1から100まで)',
                example: 20,
                pattern: '^[0-9]+$',
                type: 'string',
              },
            },
          },
          title: 'list_projects',
        },
        {
          description: 'プロジェクトを新たに作成します。',
          href: '/api/v2/projects',
          method: 'POST',
          rel: 'create',
          schema: {
            properties: {
              archived: {
                description: 'このプロジェクトが進行中かどうか',
                example: false,
                type: 'boolean',
              },
              body: {
                description: 'Markdown形式の本文',
                example: '# Example',
                type: 'string',
              },
              name: {
                description: 'プロジェクト名',
                example: 'Kobiro Project',
                type: 'string',
              },
              tags: {
                description: '記事に付いたタグ一覧',
                example: [{ name: 'Ruby', versions: ['0.0.1'] }],
                items: {
                  properties: {
                    name: { type: 'string' },
                    versions: { items: { type: 'string' }, type: 'array' },
                  },
                  required: ['name'],
                  type: 'object',
                },
                type: 'array',
                uniqueItems: true,
              },
            },
            required: ['body', 'name'],
          },
          title: 'create_project',
        },
        {
          description: 'プロジェクトを削除します。',
          href: '/api/v2/projects/:project_id',
          mediaType: 'null',
          method: 'DELETE',
          rel: 'delete',
          title: 'delete_project',
        },
        {
          description: 'プロジェクトを返します。',
          href: '/api/v2/projects/:project_id',
          method: 'GET',
          rel: 'self',
          title: 'get_project',
        },
        {
          description: 'プロジェクトを更新します。',
          href: '/api/v2/projects/:project_id',
          method: 'PATCH',
          rel: 'update',
          schema: {
            properties: {
              archived: {
                description: 'このプロジェクトが進行中かどうか',
                example: false,
                type: 'boolean',
              },
              body: {
                description: 'Markdown形式の本文',
                example: '# Example',
                type: 'string',
              },
              name: {
                description: 'プロジェクト名',
                example: 'Kobiro Project',
                type: 'string',
              },
              tags: {
                description: '記事に付いたタグ一覧',
                example: [{ name: 'Ruby', versions: ['0.0.1'] }],
                items: {
                  properties: {
                    name: { type: 'string' },
                    versions: { items: { type: 'string' }, type: 'array' },
                  },
                  required: ['name'],
                  type: 'object',
                },
                type: 'array',
                uniqueItems: true,
              },
            },
            required: ['body', 'name'],
          },
          title: 'update_project',
        },
        {
          description: 'ユーザー名を指定してプロジェクトを新たに作成します。',
          href: '/api/v2/imported_projects',
          method: 'POST',
          rel: 'create',
          schema: {
            properties: {
              archived: {
                description: 'このプロジェクトが進行中かどうか',
                example: false,
                type: 'boolean',
              },
              body: {
                description: 'Markdown形式の本文',
                example: '# Example',
                type: 'string',
              },
              name: {
                description: 'プロジェクト名',
                example: 'Kobiro Project',
                type: 'string',
              },
              tags: {
                description: '記事に付いたタグ一覧',
                example: [{ name: 'Ruby', versions: ['0.0.1'] }],
                items: {
                  properties: {
                    name: { type: 'string' },
                    versions: { items: { type: 'string' }, type: 'array' },
                  },
                  required: ['name'],
                  type: 'object',
                },
                type: 'array',
                uniqueItems: true,
              },
              user_id: {
                description: 'ユーザID',
                example: 'qiita',
                type: 'string',
              },
              created_at: {
                description: 'データが作成された日時',
                example: '2000-01-01T00:00:00+00:00',
                format: 'date-time',
                type: 'string',
              },
              updated_at: {
                description: 'データが最後に更新された日時',
                example: '2000-01-01T00:00:00+00:00',
                format: 'date-time',
                type: 'string',
              },
            },
            required: ['body', 'name', 'user_id'],
          },
          title: 'import_project',
        },
      ],
      properties: {
        rendered_body: {
          description: 'HTML形式の本文',
          example: '\u003ch1\u003eExample\u003c/h1\u003e',
          type: 'string',
        },
        archived: {
          description: 'このプロジェクトが進行中かどうか',
          example: false,
          type: 'boolean',
        },
        body: {
          description: 'Markdown形式の本文',
          example: '# Example',
          type: 'string',
        },
        created_at: {
          description: 'データが作成された日時',
          example: '2000-01-01T00:00:00+00:00',
          format: 'date-time',
          type: 'string',
        },
        id: {
          description: 'プロジェクトのチーム上での一意なID',
          example: 1,
          type: 'integer',
        },
        name: {
          description: 'プロジェクト名',
          example: 'Kobiro Project',
          type: 'string',
        },
        reactions_count: {
          description: '絵文字リアクション数',
          example: 100,
          type: 'integer',
        },
        updated_at: {
          description: 'データが最後に更新された日時',
          example: '2000-01-01T00:00:00+00:00',
          format: 'date-time',
          type: 'string',
        },
      },
      required: [
        'rendered_body',
        'archived',
        'body',
        'created_at',
        'id',
        'name',
        'reactions_count',
        'updated_at',
      ],
      title: 'プロジェクト',
    },
    reaction: {
      description:
        'Qiita Team上での絵文字リアクションを表します。Qiita Teamでのみ有効です。',
      links: [
        {
          description: 'コメントに絵文字リアクションを付けます。',
          href: '/api/v2/comments/:comment_id/reactions',
          method: 'POST',
          rel: 'create',
          schema: {
            properties: {
              name: {
                description: '絵文字の識別子',
                example: '+1',
                type: 'string',
              },
            },
            required: ['name'],
          },
          title: 'create_comment_reaction',
        },
        {
          description: '記事に絵文字リアクションを付けます。',
          href: '/api/v2/items/:item_id/reactions',
          method: 'POST',
          rel: 'create',
          schema: {
            properties: {
              name: {
                description: '絵文字の識別子',
                example: '+1',
                type: 'string',
              },
            },
            required: ['name'],
          },
          title: 'create_item_reaction',
        },
        {
          description: 'プロジェクトに絵文字リアクションを付けます。',
          href: '/api/v2/projects/:project_id/reactions',
          method: 'POST',
          rel: 'create',
          schema: {
            properties: {
              name: {
                description: '絵文字の識別子',
                example: '+1',
                type: 'string',
              },
            },
            required: ['name'],
          },
          title: 'create_project_reaction',
        },
        {
          description: 'コメントから絵文字リアクションを削除します。',
          href: '/api/v2/comments/:comment_id/reactions/:reaction_name',
          method: 'DELETE',
          rel: 'delete',
          title: 'delete_comment_reaction',
        },
        {
          description: '記事から絵文字リアクションを削除します。',
          href: '/api/v2/items/:item_id/reactions/:reaction_name',
          method: 'DELETE',
          rel: 'delete',
          title: 'delete_item_reaction',
        },
        {
          description: 'プロジェクトから絵文字リアクションを削除します。',
          href: '/api/v2/projects/:project_id/reactions/:reaction_name',
          method: 'DELETE',
          rel: 'delete',
          title: 'delete_project_reaction',
        },
        {
          description:
            'コメントに付けられた絵文字リアクション一覧を作成日時の降順で返します。',
          href: '/api/v2/comments/:comment_id/reactions',
          method: 'GET',
          rel: 'instances',
          title: 'list_comment_reactions',
        },
        {
          description:
            '記事に付けられた絵文字リアクション一覧を作成日時の降順で返します。',
          href: '/api/v2/items/:item_id/reactions',
          method: 'GET',
          rel: 'instances',
          title: 'list_item_reactions',
        },
        {
          description:
            'プロジェクトに付けられた絵文字リアクション一覧を作成日時の降順で返します。',
          href: '/api/v2/projects/:project_id/reactions',
          method: 'GET',
          rel: 'instances',
          title: 'list_project_reactions',
        },
      ],
      properties: {
        created_at: {
          description: 'データが作成された日時',
          example: '2000-01-01T00:00:00+00:00',
          format: 'date-time',
          type: 'string',
        },
        image_url: {
          description: '絵文字画像のURL',
          example: 'https://cdn.qiita.com/emoji/twemoji/unicode/1f44d.png',
          type: 'string',
        },
        name: { description: '絵文字の識別子', example: '+1', type: 'string' },
        user: {
          description: 'Qiita上のユーザを表します。',
          properties: {
            description: {
              description: '自己紹介文',
              example: 'Hello, world.',
              type: ['null', 'string'],
            },
            facebook_id: {
              description: 'Facebook ID',
              example: 'qiita',
              type: ['null', 'string'],
            },
            followees_count: {
              description: 'このユーザがフォローしているユーザの数',
              example: 100,
              type: 'integer',
            },
            followers_count: {
              description: 'このユーザをフォローしているユーザの数',
              example: 200,
              type: 'integer',
            },
            github_login_name: {
              description: 'GitHub ID',
              example: 'qiitan',
              type: ['null', 'string'],
            },
            id: { description: 'ユーザID', example: 'qiita', type: 'string' },
            items_count: {
              description:
                'このユーザが qiita.com 上で公開している記事の数 (Qiita Teamでの記事数は含まれません)',
              example: 300,
              type: 'integer',
            },
            linkedin_id: {
              description: 'LinkedIn ID',
              example: 'qiita',
              type: ['null', 'string'],
            },
            location: {
              description: '居住地',
              example: 'Tokyo, Japan',
              type: ['null', 'string'],
            },
            name: {
              description: '設定している名前',
              example: 'Qiita キータ',
              type: ['null', 'string'],
            },
            organization: {
              description: '所属している組織',
              example: 'Increments Inc',
              type: ['null', 'string'],
            },
            permanent_id: {
              description: 'ユーザごとに割り当てられる整数のID',
              example: 1,
              type: 'integer',
            },
            profile_image_url: {
              description: '設定しているプロフィール画像のURL',
              example:
                'https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/88/ccf90b557a406157dbb9d2d7e543dae384dbb561/large.png?1575443439',
              type: 'string',
            },
            team_only: {
              description: 'Qiita Team専用モードに設定されているかどうか',
              example: false,
              type: 'boolean',
            },
            twitter_screen_name: {
              description: 'Twitterのスクリーンネーム',
              example: 'qiita',
              type: ['null', 'string'],
            },
            website_url: {
              description: '設定しているWebサイトのURL',
              example: 'https://qiita.com',
              type: ['null', 'string'],
            },
          },
          required: [
            'description',
            'facebook_id',
            'followees_count',
            'followers_count',
            'github_login_name',
            'id',
            'items_count',
            'linkedin_id',
            'location',
            'name',
            'organization',
            'permanent_id',
            'profile_image_url',
            'team_only',
            'twitter_screen_name',
            'website_url',
          ],
          title: 'ユーザ',
        },
      },
      required: ['created_at', 'image_url', 'name', 'user'],
      title: '絵文字リアクション',
    },
    remove_team_member: {
      description:
        '指定のユーザーをチームから離脱させます(自身とチームのオーナーはこのAPIでは離脱させられません。)。',
      title: 'チームメンバーの離脱',
    },
    tag: {
      description: '記事に付けられた個々のタグを表します。',
      links: [
        {
          description: 'タグ一覧を作成日時の降順で返します。',
          href: '/api/v2/tags',
          method: 'GET',
          rel: 'instances',
          schema: {
            properties: {
              page: {
                description: 'ページ番号 (1から100まで)',
                example: 1,
                pattern: '^[0-9]+$',
                type: 'string',
              },
              per_page: {
                description: '1ページあたりに含まれる要素数 (1から100まで)',
                example: 20,
                pattern: '^[0-9]+$',
                type: 'string',
              },
              sort: {
                description: '並び順 (countで記事数順、nameで名前順)',
                example: 'count',
                type: 'string',
              },
            },
          },
          title: 'list_tags',
        },
        {
          description: 'タグを取得します。',
          href: '/api/v2/tags/:tag_id',
          method: 'GET',
          rel: 'self',
          title: 'get_tag',
        },
        {
          description:
            'ユーザがフォローしているタグ一覧をフォロー日時の降順で返します。',
          href: '/api/v2/users/:user_id/following_tags',
          method: 'GET',
          rel: 'instances',
          schema: {
            properties: {
              page: {
                description: 'ページ番号 (1から100まで)',
                example: 1,
                pattern: '^[0-9]+$',
                type: 'string',
              },
              per_page: {
                description: '1ページあたりに含まれる要素数 (1から100まで)',
                example: 20,
                pattern: '^[0-9]+$',
                type: 'string',
              },
            },
          },
          title: 'list_user_following_tags',
        },
        {
          description: 'タグのフォローを外します。',
          href: '/api/v2/tags/:tag_id/following',
          mediaType: 'null',
          method: 'DELETE',
          rel: 'delete',
          title: 'unfollow_tag',
        },
        {
          description: 'タグをフォローしているかどうかを調べます。',
          href: '/api/v2/tags/:tag_id/following',
          method: 'GET',
          rel: 'check',
          title: 'get_tag_following',
        },
        {
          description: 'タグをフォローします。',
          href: '/api/v2/tags/:tag_id/following',
          mediaType: 'null',
          method: 'PUT',
          rel: 'put',
          title: 'follow_tag',
        },
      ],
      properties: {
        followers_count: {
          description: 'このタグをフォローしているユーザの数',
          example: 100,
          type: 'integer',
        },
        icon_url: {
          description: 'このタグに設定されたアイコン画像のURL',
          example:
            'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/9de6a11d330f5694820082438f88ccf4a1b289b2/medium.jpg',
          type: ['null', 'string'],
        },
        id: {
          description: 'タグを特定するための一意な名前',
          example: 'qiita',
          type: 'string',
        },
        items_count: {
          description: 'このタグが付けられた記事の数',
          example: 200,
          type: 'integer',
        },
      },
      required: ['followers_count', 'icon_url', 'id', 'items_count'],
      title: 'タグ',
    },
    tagging: {
      description: '記事とタグとの関連を表します。',
      links: [
        {
          description: '記事にタグを追加します。Qiita Teamでのみ有効です。',
          href: '/api/v2/items/:item_id/taggings',
          method: 'POST',
          rel: 'create',
          schema: {
            properties: {
              name: {
                description: 'タグを特定するための一意な名前',
                example: 'qiita',
                type: 'string',
              },
              versions: {
                example: ['0.0.1'],
                items: { type: 'string' },
                type: 'array',
              },
            },
            required: ['name'],
          },
          title: 'create_tagging',
        },
        {
          description:
            '記事から指定されたタグを取り除きます。Qiita Teamでのみ有効です。',
          href: '/api/v2/items/:item_id/taggings/:tagging_id',
          mediaType: 'null',
          method: 'DELETE',
          rel: 'delete',
          title: 'delete_tagging',
        },
      ],
      properties: {
        name: {
          description: 'タグを特定するための一意な名前',
          example: 'qiita',
          type: 'string',
        },
        versions: {
          example: ['0.0.1'],
          items: { type: 'string' },
          type: 'array',
        },
      },
      required: ['name', 'versions'],
      title: 'タギング',
    },
    team: {
      description:
        'Qiita Team上で所属しているチームを表します。Qiita Teamでのみ有効です。',
      links: [
        {
          description:
            'ユーザが所属している全てのチームを、チーム作成日時の降順で返します。',
          href: '/api/v2/teams',
          method: 'GET',
          rel: 'instances',
          title: 'list_teams',
        },
      ],
      properties: {
        active: {
          description: 'チームが利用可能な状態かどうか',
          example: true,
          type: 'boolean',
        },
        id: {
          description: 'チームの一意なID',
          example: 'increments',
          type: 'string',
        },
        name: {
          description: 'チームに設定されている名前を表します。',
          example: 'Increments Inc.',
          type: 'string',
        },
      },
      required: ['active', 'id', 'name'],
      title: 'チーム',
    },
    team_access_token: {
      description:
        'Qiita API v2で認証・認可を行うためのチーム別アクセストークンを表します。Qiita Teamでのみ有効です。',
      links: [
        {
          description:
            '与えられた認証情報をもとに新しいチーム別アクセストークンを発行します。',
          href: '/api/v2/team_access_tokens',
          method: 'POST',
          rel: 'create',
          schema: {
            properties: {
              client_id: {
                description: '登録されたAPIクライアントを特定するためのID',
                example:
                  'a91f0396a0968ff593eafdd194e3d17d32c41b1da7b25e873b42e9058058cd9d',
                pattern: '^[0-9a-f]{40}$',
                type: 'string',
              },
              client_secret: {
                description: '登録されたAPIクライアントを認証するための秘密鍵',
                example:
                  '01fc259c31fe39e72c8ef911c3432a33d51e9337ff34c4fac86c491a0d37251f',
                pattern: '^[0-9a-f]{40}$',
                type: 'string',
              },
              code: {
                description:
                  'リダイレクト用のURLに付与された、チーム別アクセストークンと交換するための文字列',
                example:
                  'fefef5f067171f247fb415e38cb0631797b82f4141dcdee66db846c3ade57a03',
                pattern: '^[0-9a-f]{40}$',
                type: 'string',
              },
            },
            required: ['client_id', 'client_secret', 'code'],
          },
          title: 'create_team_access_token',
        },
        {
          description:
            '指定されたアクセストークンを失効させ、それ以降利用できないようにします。',
          href: '/api/v2/access_tokens/:team_access_token',
          mediaType: 'null',
          method: 'DELETE',
          rel: 'delete',
          title: 'delete_team_access_token',
        },
      ],
      properties: {
        client_id: {
          description: '登録されたAPIクライアントを特定するためのID',
          example:
            'a91f0396a0968ff593eafdd194e3d17d32c41b1da7b25e873b42e9058058cd9d',
          pattern: '^[0-9a-f]{40}$',
          type: 'string',
        },
        scopes: {
          description: 'アクセストークンに許された操作の一覧',
          items: { example: 'read_qiita_team', type: 'string' },
          type: 'array',
        },
        token: {
          description: 'アクセストークンを表現する文字列',
          example:
            'ea5d0a593b2655e9568f144fb1826342292f5c6b7d406fda00577b8d1530d8a5',
          pattern: '^[0-9a-f]{40}$',
          type: 'string',
        },
      },
      required: ['client_id', 'scopes', 'token'],
      title: 'チーム別アクセストークン',
    },
    team_invitation: {
      description:
        'Qiita Teamでの招待中のメンバーを表します。(Qiita Teamでのみ有効。管理者権限が必要。)',
      links: [
        {
          description: '招待中のメンバーの一覧を返します',
          href: 'api/v2/team_invitations',
          method: 'GET',
          rel: 'instances',
          title: 'list_team_invitations',
        },
        {
          description: 'チームにメンバーを招待します',
          href: 'api/v2/team_invitations',
          method: 'POST',
          rel: 'create',
          title: 'create_team_invitation',
        },
        {
          description: '招待を取り消します',
          href: 'api/v2/team_invitations/:email',
          mediaType: 'null',
          method: 'DELETE',
          rel: 'delete',
          title: 'delete_team_invitation',
        },
      ],
      properties: {
        email: {
          description: '招待中のメンバーのemailアドレスです。',
          example: 'example@example.com',
          type: 'string',
        },
        url: {
          description: '招待用URLです。有効期限は1日です。',
          example:
            'https://team-name.qiita.com/registration/confirm?id=3\u0026token=456c84ae60070161a36c08c9e710050abe5852cc',
          type: 'string',
        },
      },
      required: ['email', 'url'],
      title: '招待中のメンバー',
    },
    template: {
      description:
        '記事のひな形に利用できるテンプレートを表します。Qiita Teamでのみ有効です。',
      links: [
        {
          description: 'チーム内のテンプレート一覧を返します。',
          href: '/api/v2/templates',
          method: 'GET',
          rel: 'instances',
          schema: {
            properties: {
              page: {
                description: 'ページ番号 (1から100まで)',
                example: 1,
                pattern: '^[0-9]+$',
                type: 'string',
              },
              per_page: {
                description: '1ページあたりに含まれる要素数 (1から100まで)',
                example: 20,
                pattern: '^[0-9]+$',
                type: 'string',
              },
            },
          },
          title: 'list_templates',
        },
        {
          description: 'テンプレートを削除します。',
          href: '/api/v2/templates/:template_id',
          mediaType: 'null',
          method: 'DELETE',
          rel: 'delete',
          title: 'delete_template',
        },
        {
          description: 'テンプレートを取得します。',
          href: '/api/v2/templates/:template_id',
          method: 'GET',
          rel: 'self',
          title: 'get_template',
        },
        {
          description: '新しくテンプレートを作成します。',
          href: '/api/v2/templates',
          method: 'POST',
          rel: 'create',
          schema: {
            properties: {
              body: {
                description: 'テンプレートの本文',
                example: 'Weekly MTG on %{Year}/%{month}/%{day}',
                type: 'string',
              },
              name: {
                description: 'テンプレートを判別するための名前',
                example: 'Weekly MTG',
                type: 'string',
              },
              tags: {
                description: 'タグ一覧',
                example: [
                  { name: 'MTG/%{Year}/%{month}/%{day}', versions: ['0.0.1'] },
                ],
                items: {
                  properties: {
                    name: { type: 'string' },
                    versions: { items: { type: 'string' }, type: 'array' },
                  },
                  required: ['name'],
                },
                type: 'array',
                uniqueItems: true,
              },
              title: {
                description: '生成される記事のタイトルの雛形',
                example: 'Weekly MTG on %{Year}/%{month}/%{day}',
                type: 'string',
              },
            },
            required: ['body', 'name', 'tags', 'title'],
          },
          title: 'create_template',
        },
        {
          description: 'テンプレートを更新します。',
          href: '/api/v2/templates/:template_id',
          method: 'PATCH',
          rel: 'update',
          schema: {
            properties: {
              body: {
                description: 'テンプレートの本文',
                example: 'Weekly MTG on %{Year}/%{month}/%{day}',
                type: 'string',
              },
              name: {
                description: 'テンプレートを判別するための名前',
                example: 'Weekly MTG',
                type: 'string',
              },
              tags: {
                description: 'タグ一覧',
                example: [
                  { name: 'MTG/%{Year}/%{month}/%{day}', versions: ['0.0.1'] },
                ],
                items: {
                  properties: {
                    name: { type: 'string' },
                    versions: { items: { type: 'string' }, type: 'array' },
                  },
                  required: ['name'],
                },
                type: 'array',
                uniqueItems: true,
              },
              title: {
                description: '生成される記事のタイトルの雛形',
                example: 'Weekly MTG on %{Year}/%{month}/%{day}',
                type: 'string',
              },
            },
            required: ['body', 'name', 'tags', 'title'],
          },
          title: 'update_template',
        },
      ],
      properties: {
        body: {
          description: 'テンプレートの本文',
          example: 'Weekly MTG on %{Year}/%{month}/%{day}',
          type: 'string',
        },
        id: {
          description: 'テンプレートの一意なID',
          example: 1,
          type: 'integer',
        },
        name: {
          description: 'テンプレートを判別するための名前',
          example: 'Weekly MTG',
          type: 'string',
        },
        expanded_body: {
          description: '変数を展開した状態の本文',
          example: 'Weekly MTG on 2000/01/01',
          type: 'string',
        },
        expanded_tags: {
          description: '変数を展開した状態のタグ一覧',
          example: [{ name: 'MTG/2000/01/01', versions: ['0.0.1'] }],
          items: {
            properties: {
              name: { type: 'string' },
              versions: { items: { type: 'string' }, type: 'array' },
            },
            required: ['name'],
          },
          type: 'array',
          uniqueItems: true,
        },
        expanded_title: {
          description: '変数を展開した状態のタイトル',
          example: 'Weekly MTG on 2015/06/03',
          type: 'string',
        },
        tags: {
          description: 'タグ一覧',
          example: [
            { name: 'MTG/%{Year}/%{month}/%{day}', versions: ['0.0.1'] },
          ],
          items: {
            properties: {
              name: { type: 'string' },
              versions: { items: { type: 'string' }, type: 'array' },
            },
            required: ['name'],
          },
          type: 'array',
          uniqueItems: true,
        },
        title: {
          description: '生成される記事のタイトルの雛形',
          example: 'Weekly MTG on %{Year}/%{month}/%{day}',
          type: 'string',
        },
      },
      required: [
        'body',
        'id',
        'name',
        'expanded_body',
        'expanded_tags',
        'expanded_title',
        'tags',
        'title',
      ],
      title: 'テンプレート',
    },
    user: {
      description: 'Qiita上のユーザを表します。',
      links: [
        {
          description:
            '記事をストックしているユーザ一覧を、ストックした日時の降順で返します。',
          href: '/api/v2/items/:item_id/stockers',
          method: 'GET',
          rel: 'instances',
          schema: {
            properties: {
              page: {
                description: 'ページ番号 (1から100まで)',
                example: 1,
                pattern: '^[0-9]+$',
                type: 'string',
              },
              per_page: {
                description: '1ページあたりに含まれる要素数 (1から100まで)',
                example: 20,
                pattern: '^[0-9]+$',
                type: 'string',
              },
            },
          },
          title: 'list_item_stockers',
        },
        {
          description: '全てのユーザの一覧を作成日時の降順で取得します。',
          href: '/api/v2/users',
          method: 'GET',
          rel: 'instances',
          schema: {
            properties: {
              page: {
                description: 'ページ番号 (1から100まで)',
                example: 1,
                pattern: '^[0-9]+$',
                type: 'string',
              },
              per_page: {
                description: '1ページあたりに含まれる要素数 (1から100まで)',
                example: 20,
                pattern: '^[0-9]+$',
                type: 'string',
              },
            },
          },
          title: 'list_users',
        },
        {
          description: 'ユーザを取得します。',
          href: '/api/v2/users/:user_id',
          method: 'GET',
          rel: 'self',
          title: 'get_user',
        },
        {
          description: 'ユーザがフォローしているユーザ一覧を取得します。',
          href: '/api/v2/users/:user_id/followees',
          method: 'GET',
          rel: 'instances',
          schema: {
            properties: {
              page: {
                description: 'ページ番号 (1から100まで)',
                example: 1,
                pattern: '^[0-9]+$',
                type: 'string',
              },
              per_page: {
                description: '1ページあたりに含まれる要素数 (1から100まで)',
                example: 20,
                pattern: '^[0-9]+$',
                type: 'string',
              },
            },
          },
          title: 'list_user_followees',
        },
        {
          description: 'ユーザをフォローしているユーザ一覧を取得します。',
          href: '/api/v2/users/:user_id/followers',
          method: 'GET',
          rel: 'instances',
          schema: {
            properties: {
              page: {
                description: 'ページ番号 (1から100まで)',
                example: 1,
                pattern: '^[0-9]+$',
                type: 'string',
              },
              per_page: {
                description: '1ページあたりに含まれる要素数 (1から100まで)',
                example: 20,
                pattern: '^[0-9]+$',
                type: 'string',
              },
            },
          },
          title: 'list_user_followers',
        },
        {
          description: 'ユーザへのフォローを外します。',
          href: '/api/v2/users/:user_id/following',
          mediaType: 'null',
          method: 'DELETE',
          rel: 'delete',
          title: 'unfollow_user',
        },
        {
          description: 'ユーザをフォローしている場合に204を返します。',
          href: '/api/v2/users/:user_id/following',
          method: 'GET',
          rel: 'check',
          title: 'get_user_following',
        },
        {
          description: 'ユーザをフォローします。',
          href: '/api/v2/users/:user_id/following',
          mediaType: 'null',
          method: 'PUT',
          rel: 'put',
          title: 'follow_user',
        },
      ],
      properties: {
        description: {
          description: '自己紹介文',
          example: 'Hello, world.',
          type: ['null', 'string'],
        },
        facebook_id: {
          description: 'Facebook ID',
          example: 'qiita',
          type: ['null', 'string'],
        },
        followees_count: {
          description: 'このユーザがフォローしているユーザの数',
          example: 100,
          type: 'integer',
        },
        followers_count: {
          description: 'このユーザをフォローしているユーザの数',
          example: 200,
          type: 'integer',
        },
        github_login_name: {
          description: 'GitHub ID',
          example: 'qiitan',
          type: ['null', 'string'],
        },
        id: { description: 'ユーザID', example: 'qiita', type: 'string' },
        items_count: {
          description:
            'このユーザが qiita.com 上で公開している記事の数 (Qiita Teamでの記事数は含まれません)',
          example: 300,
          type: 'integer',
        },
        linkedin_id: {
          description: 'LinkedIn ID',
          example: 'qiita',
          type: ['null', 'string'],
        },
        location: {
          description: '居住地',
          example: 'Tokyo, Japan',
          type: ['null', 'string'],
        },
        name: {
          description: '設定している名前',
          example: 'Qiita キータ',
          type: ['null', 'string'],
        },
        organization: {
          description: '所属している組織',
          example: 'Increments Inc',
          type: ['null', 'string'],
        },
        permanent_id: {
          description: 'ユーザごとに割り当てられる整数のID',
          example: 1,
          type: 'integer',
        },
        profile_image_url: {
          description: '設定しているプロフィール画像のURL',
          example:
            'https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/88/ccf90b557a406157dbb9d2d7e543dae384dbb561/large.png?1575443439',
          type: 'string',
        },
        team_only: {
          description: 'Qiita Team専用モードに設定されているかどうか',
          example: false,
          type: 'boolean',
        },
        twitter_screen_name: {
          description: 'Twitterのスクリーンネーム',
          example: 'qiita',
          type: ['null', 'string'],
        },
        website_url: {
          description: '設定しているWebサイトのURL',
          example: 'https://qiita.com',
          type: ['null', 'string'],
        },
      },
      required: [
        'description',
        'facebook_id',
        'followees_count',
        'followers_count',
        'github_login_name',
        'id',
        'items_count',
        'linkedin_id',
        'location',
        'name',
        'organization',
        'permanent_id',
        'profile_image_url',
        'team_only',
        'twitter_screen_name',
        'website_url',
      ],
      title: 'ユーザ',
    },
  },
  required: [
    'access_token',
    'authenticated_user',
    'comment',
    'expanded_template',
    'group',
    'item',
    'like',
    'project',
    'reaction',
    'remove_team_member',
    'tag',
    'tagging',
    'team',
    'team_access_token',
    'team_invitation',
    'template',
    'user',
  ],
  title: 'Qiita API v2 JSON Schema',
};